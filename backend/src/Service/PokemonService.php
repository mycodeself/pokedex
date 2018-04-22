<?php

namespace App\Service;

use App\Entity\Pokemon;
use App\Entity\PokemonTypes;
use App\Exception\InvalidRequestException;
use App\Exception\PokemonAlreadyExistsException;
use App\Exception\PokemonNotFoundException;
use App\Repository\PokemonRepositoryInterface;
use App\Service\Request\CreatePokemonRequest;
use App\Service\Request\UpdatePokemonRequest;
use App\Validator\RequestValidator;

/**
 * Class PokemonService.
 */
class PokemonService
{
    /**
     * @var PokemonRepositoryInterface
     */
    private $pokemonRepository;

    /**
     * @var RequestValidator
     */
    private $validator;

    /**
     * @var PokemonImageService
     */
    private $pokemonImageService;

    /**
     * PokemonService constructor.
     *
     * @param PokemonRepositoryInterface $pokemonRepository
     * @param RequestValidator           $validatorInterface
     */
    public function __construct(
        PokemonRepositoryInterface $pokemonRepository,
        RequestValidator $validator,
        PokemonImageService $pokemonImageService
    ) {
        $this->pokemonRepository = $pokemonRepository;
        $this->validator = $validator;
        $this->pokemonImageService = $pokemonImageService;
    }

    /**
     * @param CreatePokemonRequest $request
     *
     * @return Pokemon
     *
     * @throws PokemonNotFoundException
     * @throws InvalidRequestException
     * @throws PokemonAlreadyExistsException
     */
    public function create(CreatePokemonRequest $request): Pokemon
    {
        $this->validator->validate($request);

        if ($this->pokemonRepository->findByName($request->name())) {
            throw new PokemonAlreadyExistsException($request->name());
        }

        $evolution = null;
        $types = new PokemonTypes($request->firstType(), $request->secondType());

        if (!empty($request->evolutionId())) {
            $evolution = $this->pokemonRepository->getById($request->evolutionId());
        }

        $pokemon = new Pokemon(
            $request->name(),
            $request->shortDescription(),
            $types,
            $evolution
        );

        $this->pokemonRepository->save($pokemon);

        return $pokemon;
    }

    /**
     * @param UpdatePokemonRequest $request
     *
     * @throws PokemonNotFoundException
     * @throws InvalidRequestException
     */
    public function update(UpdatePokemonRequest $request): void
    {
        $this->validator->validate($request);

        $pokemon = $this->pokemonRepository->getById($request->id());

        $pokemon->updateName($request->name());
        $pokemon->updateDescription($request->shortDescription());
        $pokemon->updateTypes(new PokemonTypes($request->firstType(), $request->secondType()));

        if (!empty($request->evolutionId())) {
            $evolution = $this->pokemonRepository->getById($request->evolutionId());
            $pokemon->updateEvolution($evolution);
        } else {
            $pokemon->removeEvolution();
        }

        $this->pokemonRepository->save($pokemon);
    }

    /**
     * @param int $id
     *
     * @throws PokemonNotFoundException
     */
    public function delete(int $id): void
    {
        $pokemon = $this->pokemonRepository->getById($id);

        $this->pokemonImageService->deleteImage($pokemon->image());

        $this->pokemonRepository->remove($pokemon);
    }

    /**
     * @return array
     */
    public function getAll(): array
    {
        return $this->pokemonRepository->findAll();
    }

    /**
     * @param int $id
     *
     * @return Pokemon
     *
     * @throws PokemonNotFoundException
     */
    public function getById(int $id): Pokemon
    {
        return $this->pokemonRepository->getById($id);
    }
}
