<?php

namespace App\Repository;
use App\Entity\Pokemon;
use App\Exception\PokemonNotFoundException;

/**
 * Class PokemonRepositoryInterface
 */
interface PokemonRepositoryInterface
{
    /**
     * @param int $id
     * @return Pokemon
     *
     * @throws PokemonNotFoundException
     */
    public function getById(int $id): Pokemon;

    /**
     * @param int $id
     * @return Pokemon|null
     */
    public function findById(int $id): ?Pokemon;

    /**
     * @return array
     */
    public function findAll(): array;

    /**
     * @param Pokemon $pokemon
     */
    public function save(Pokemon $pokemon): void;

    /**
     * @param Pokemon $pokemon
     */
    public function remove(Pokemon $pokemon): void;

}