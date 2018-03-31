<?php

namespace App\Controller;

use App\Entity\Pokemon;
use App\Exception\InvalidRequestException;
use App\Exception\PokemonAlreadyExistsException;
use App\Exception\PokemonNotFoundException;
use App\Service\PokemonService;
use App\Service\Request\CreatePokemonRequest;
use App\Service\Request\UpdatePokemonRequest;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


/**
 * Class PokemonController
 */
class PokemonController extends Controller
{

    /**
     * @Route("/api/pokemons", methods={"POST"})
     *
     * @param Request $request
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function createAction(Request $request, PokemonService $pokemonService): Response
    {
        $data = json_decode($request->getContent(), true);

        $createPokemonRequest = CreatePokemonRequest::fromArray($data);

        try {
            $pokemon = $pokemonService->create($createPokemonRequest);
            return new JsonResponse($pokemon, Response::HTTP_CREATED);
        } catch (PokemonNotFoundException $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_NOT_FOUND);
        } catch (InvalidRequestException $e) {
            return new JsonResponse($e->getViolationListAsArray(), Response::HTTP_BAD_REQUEST);
        } catch (PokemonAlreadyExistsException $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_CONFLICT);
        }
    }

    /**
     * @Route("/api/pokemons", methods={"GET"})
     *
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function getAllAction(PokemonService $pokemonService): Response
    {
        $pokemons = $pokemonService->getAll();

        if(empty($pokemons)) {
            return new JsonResponse(null, Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse($pokemons, Response::HTTP_OK);
    }

    /**
     * @Route("/api/pokemons/{id}", methods={"GET"})
     *
     * @param int $id
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function getAction(int $id, PokemonService $pokemonService): Response
    {
        try {
            $pokemon = $pokemonService->getById($id);
            return new JsonResponse($pokemon, Response::HTTP_OK);
        } catch (PokemonNotFoundException $e) {
            return new JsonResponse(null, Response::HTTP_NOT_FOUND);
        }

    }

    /**
     * @Route("/api/pokemons/{id}", methods={"PUT"})
     *
     * @param Request $request
     * @param int $id
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function updateAction(Request $request, int $id, PokemonService $pokemonService): Response
    {
        $data = json_decode($request->getContent(), true);

        $data['id'] = $id;
        $updatePokemonRequest = UpdatePokemonRequest::fromArray($data);

        try {
            $pokemonService->update($updatePokemonRequest);
            return new JsonResponse(null, Response::HTTP_OK);
        } catch (PokemonNotFoundException $e) {
            return new JsonResponse($e->getMessage(), Response::HTTP_NOT_FOUND);
        } catch (InvalidRequestException $e) {
            return new JsonResponse($e->getViolationListAsArray(), Response::HTTP_BAD_REQUEST);
        }
    }

    /**
     * @Route("/api/pokemons/{id}", methods={"DELETE"})
     *
     * @param int $id
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function deleteAction(int $id, PokemonService $pokemonService): Response
    {
        try {
            $pokemonService->delete($id);
            return new JsonResponse(null, Response::HTTP_OK);
        } catch (PokemonNotFoundException $e) {
            return new JsonResponse(null, Response::HTTP_NOT_FOUND);
        }
    }

    /**
     * @Route("/api/pokemons/{id}/image", methods={"PATCH"})
     *
     * @param int $id
     * @param PokemonService $pokemonService
     * @return Response
     */
    public function uploadImage(Request $request, int $id, PokemonService $pokemonService): Response
    {
        var_dump($request->files->all());
        file_put_contents(Pokemon::IMAGE_UPLOAD_PATH . '/poke.png', $request->getContent(true));
        return new Response();
    }

}