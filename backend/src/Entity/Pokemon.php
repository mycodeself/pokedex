<?php

namespace App\Entity;
use App\Service\Request\CreatePokemonRequest;
use JsonSerializable;

/**
 * Class Pokemon
 */
class Pokemon implements JsonSerializable
{
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
    private $shortDescription;

    /**
     * @var PokemonTypes
     */
    private $types;

    /**
     * @var Pokemon|null
     */
    private $evolution;

    /**
     * Pokemon constructor.
     * @param string $name
     * @param string $shortDescription
     * @param PokemonTypes $type
     * @param Pokemon|null $evolution
     */
    public function __construct(string $name, string $shortDescription, PokemonTypes $type, ?Pokemon $evolution = null)
    {
        $this->name = $name;
        $this->shortDescription = $shortDescription;
        $this->types = $type;
        $this->evolution = $evolution;
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
    public function shortDescription(): string
    {
        return $this->shortDescription;
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
     * @param string $name
     */
    public function updateName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @param string $shortDescription
     */
    public function updateShortDescription(string $shortDescription): void
    {
        $this->shortDescription = $shortDescription;
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
     * Specify data which should be serialized to JSON
     * @link http://php.net/manual/en/jsonserializable.jsonserialize.php
     * @return mixed data which can be serialized by <b>json_encode</b>,
     * which is a value of any type other than a resource.
     * @since 5.4.0
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id(),
            'name' => $this->name(),
            'shortDescription' => $this->shortDescription(),
            'firstType' => $this->types()->primaryType(),
            'secondType' => $this->types()->secondaryType(),
            'evolution' => $this->evolution()
        ];
    }
}