<?php

namespace App\Controller;

use App\Exception\PokemonNotFoundException;
use App\Service\PokemonService;
use App\Service\Request\CreatePokemonRequest;
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
        }
    }

}