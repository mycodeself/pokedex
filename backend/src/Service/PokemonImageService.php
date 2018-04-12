<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 31/03/18
 * Time: 17:23
 */

namespace App\Service;


use App\Entity\Pokemon;
use App\Exception\InvalidRequestException;
use App\Exception\PokemonNotFoundException;
use App\Repository\PokemonRepositoryInterface;
use App\Service\Request\UploadPokemonImageRequest;
use App\Validator\RequestValidator;

class PokemonImageService
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
     * PokemonImageService constructor.
     * @param PokemonRepositoryInterface $pokemonRepository
     * @param RequestValidator $validator
     */
    public function __construct(PokemonRepositoryInterface $pokemonRepository, RequestValidator $validator)
    {
        $this->pokemonRepository = $pokemonRepository;
        $this->validator = $validator;
    }

    /**
     * @param UploadPokemonImageRequest $request
     * @return string
     * @throws PokemonNotFoundException
     * @throws InvalidRequestException
     */
    public function upload(UploadPokemonImageRequest $request): string
    {
        $this->validator->validate($request);

        $pokemon = $this->pokemonRepository->getById($request->id());

        $this->deleteImage($pokemon->image());

        $file = $request->image();
        $fileName = $pokemon->name() . uniqid() . '.' . $file->guessExtension();

        $file->move(Pokemon::IMAGE_UPLOAD_PATH, $fileName);
        $pokemon->updateImage($fileName);
        $this->pokemonRepository->save($pokemon);

        return $fileName;
    }

    /**
     * @param int $pokemonId
     * @throws PokemonNotFoundException
     */
    public function delete(int $pokemonId): void
    {
        $pokemon = $this->pokemonRepository->getById($pokemonId);

        $this->deleteImage($pokemon->image());
    }

    /**
     * @param string $fileName
     */
    public function deleteImage(string $fileName): void
    {
        if(!empty($fileName)) {
            $filePath = Pokemon::IMAGE_UPLOAD_PATH . '/' . $fileName;
            if(is_file($filePath)) {
                unlink($filePath);
            }
        }
    }
}