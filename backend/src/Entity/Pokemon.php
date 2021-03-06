<?php

namespace App\Entity;

/**
 * Class Pokemon.
 */
class Pokemon
{
    const IMAGE_UPLOAD_PATH = __DIR__.'/../../public/uploads/pokemons';

    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $description;

    /**
     * @var PokemonTypes
     */
    private $types;

    /**
     * @var Pokemon|null
     */
    private $evolution;

    /**
     * @var string
     */
    private $image;

    /**
     * Pokemon constructor.
     *
     * @param string       $name
     * @param string       $description
     * @param PokemonTypes $type
     * @param Pokemon|null $evolution
     */
    public function __construct(string $name, string $description, PokemonTypes $type, ?Pokemon $evolution = null)
    {
        $this->name = $name;
        $this->description = $description;
        $this->types = $type;
        $this->evolution = $evolution;
        $this->image = '';
    }

    /**
     * @return int
     */
    public function id(): int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function name(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function description(): string
    {
        return $this->description;
    }

    /**
     * @return PokemonTypes
     */
    public function types(): PokemonTypes
    {
        return $this->types;
    }

    /**
     * @return Pokemon|null
     */
    public function evolution(): ?Pokemon
    {
        return $this->evolution;
    }

    /**
     * @return string
     */
    public function image(): string
    {
        return $this->image;
    }

    /**
     * @param string $name
     */
    public function updateName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @param string $description
     */
    public function updateDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @param PokemonTypes $pokemonTypes
     */
    public function updateTypes(PokemonTypes $pokemonTypes): void
    {
        $this->types = $pokemonTypes;
    }

    /**
     * @param Pokemon $evolution
     */
    public function updateEvolution(Pokemon $evolution): void
    {
        $this->evolution = $evolution;
    }

    /**
     * @param string $image
     */
    public function updateImage(string $image): void
    {
        $this->image = $image;
    }
}
