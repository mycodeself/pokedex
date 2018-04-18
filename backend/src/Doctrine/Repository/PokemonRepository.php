<?php

namespace App\Doctrine\Repository;

use App\Entity\Pokemon;
use App\Exception\PokemonNotFoundException;
use App\Repository\PokemonRepositoryInterface;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\ORMException;

/**
 * Class PokemonRepository.
 */
class PokemonRepository extends EntityRepository implements PokemonRepositoryInterface
{
    /**
     * @param int $id
     *
     * @return Pokemon
     *
     * @throws PokemonNotFoundException
     */
    public function getById(int $id): Pokemon
    {
        $pokemon = $this->findById($id);

        if (empty($pokemon)) {
            throw new PokemonNotFoundException(sprintf('Pokemon with id %d was not found.', $id));
        }

        return $pokemon;
    }

    /**
     * @param int $id
     *
     * @return Pokemon|null
     */
    public function findById(int $id): ?Pokemon
    {
        return $this->find($id);
    }

    /**
     * @return array
     */
    public function findAll(): array
    {
        return parent::findAll();
    }

    /**
     * @param Pokemon $pokemon
     *
     * @throws ORMException
     */
    public function save(Pokemon $pokemon): void
    {
        $entityManager = $this->getEntityManager();

        $entityManager->persist($pokemon);
        $entityManager->flush();
    }

    /**
     * @param Pokemon $pokemon
     *
     * @throws ORMException
     */
    public function remove(Pokemon $pokemon): void
    {
        $entityManager = $this->getEntityManager();

        $entityManager->remove($pokemon);
        $entityManager->flush();
    }

    /**
     * @param string $name
     *
     * @return Pokemon|null|object
     */
    public function findByName(string $name): ?Pokemon
    {
        return $this->findOneBy([
            'name' => $name,
        ]);
    }
}
