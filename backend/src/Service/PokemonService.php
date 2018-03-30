<?php

namespace App\Service;
use App\Entity\Pokemon;
use App\Entity\PokemonTypes;
use App\Exception\PokemonNotFoundException;
use App\Repository\PokemonRepositoryInterface;
use App\Service\Request\CreatePokemonRequest;

/**
 * Class PokemonService
 */
class PokemonService
{
    /**
     * @var PokemonRepositoryInterface
     */
    private $pokemonRepository;

    /**
     * PokemonService constructor.
     * @param PokemonRepositoryInterface $pokemonRepository
     */
    public function __construct(PokemonRepositoryInterface $pokemonRepository)
    {
        $this->pokemonRepository = $pokemonRepository;
    }

    /**
     * @param CreatePokemonRequest $request
     * @return Pokemon
     * @throws PokemonNotFoundException
     */
    public function create(CreatePokemonRequest $request): Pokemon
    {
        $evolution = null;
        $types = new PokemonTypes($request->firstType(), $request->secondType());

        if(!empty($request->evolutionId())) {
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
     * @param int $id
     * @throws PokemonNotFoundException
     */
    public function delete(int $id): void
    {
        $pokemon = $this->pokemonRepository->getById($id);

        $this->pokemonRepository->remove($pokemon);
    }

}