<?php

namespace App\Service\Request;

/**
 * Class CreatePokemonRequest
 */
class CreatePokemonRequest
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $shortDescription;

    /**
     * @var string
     */
    private $firstType;

    /**
     * @var string
     */
    private $secondType;

    /**
     * @var int
     */
    private $evolutionId;

    /**
     * CreatePokemonRequest constructor.
     * @param string $name
     * @param string $shortDescription
     * @param string $firstType
     * @param string $secondType
     * @param int $evolutionId
     */
    public function __construct(
        string $name,
        string $shortDescription,
        string $firstType,
        string $secondType = '',
        ?int $evolutionId = null
    )
    {
        $this->name = $name;
        $this->shortDescription = $shortDescription;
        $this->firstType = $firstType;
        $this->secondType = $secondType;
        $this->evolutionId = $evolutionId;
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
     * @return string
     */
    public function firstType(): string
    {
        return $this->firstType;
    }

    /**
     * @return string
     */
    public function secondType(): string
    {
        return $this->secondType;
    }

    /**
     * @return int
     */
    public function evolutionId(): ?int
    {
        return $this->evolutionId;
    }

    /**
     * @param array $data
     * @return CreatePokemonRequest
     */
    public static function fromArray(array $data): self
    {
        return new CreatePokemonRequest(
            isset($data['name']) ? $data['name'] : '',
            isset($data['shortDescription']) ? $data['shortDescription'] : '',
            isset($data['firstType']) ? $data['firstType'] : '',
            isset($data['secondType']) ? $data['secondType'] : '',
            isset($data['evolutionId']) ? $data['evolutionId'] : null
        );
    }

}