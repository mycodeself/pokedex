<?php

namespace App\Entity;

/**
 * Class PokemonType
 */
class PokemonTypes
{
    /**
     * @var string
     */
    private $primaryType;

    /**
     * @var string
     */
    private $secondaryType;

    /**
     * PokemonType constructor.
     * @param array $types
     */
    public function __construct(string $primaryType, string $secondaryType = '')
    {
        $this->primaryType = $primaryType;
        $this->secondaryType = '';
    }

    /**
     * @return string
     */
    public function primaryType(): string
    {
        return $this->primaryType;
    }

    /**
     * @return null|string
     */
    public function secondaryType(): ?string
    {
        return (empty($this->secondaryType)) ? null : $this->secondaryType;
    }

    /**
     * @return array
     */
    public function types(): array
    {
        $types = [$this->primaryType];
        if(!empty($this->secondaryType)) {
            $types[] = $this->secondaryType;
        }

        return $types;
    }

    /**
     * @param PokemonTypes $type
     * @return bool
     */
    public function equals(PokemonTypes $type): bool
    {
        return $this->primaryType() === $type->primaryType()
            && $this->secondaryType() === $type->secondaryType();
    }

}