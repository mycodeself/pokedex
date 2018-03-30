<?php

namespace App\Service\Request;

/**
 * Class UpdatePokemonRequest
 */
class UpdatePokemonRequest extends CreatePokemonRequest
{
    /**
     * @var int
     */
    private $id;

    /**
     * UpdatePokemonRequest constructor.
     * @param int $id
     */
    public function __construct(
        int $id,
        string $name,
        string $shortDescription,
        string $firstType,
        string $secondType,
        ?int $evolutionId = null
    )
    {
        $this->id = $id;
        parent::__construct(
            $name,
            $shortDescription,
            $firstType,
            $secondType,
            $evolutionId
        );
    }

    /**
     * @return int
     */
    public function id(): int
    {
        return $this->id;
    }

    /**
     * @param array $data
     */
    public static function fromArray(array $data)
    {
        return new static (
            isset($data['id']) ? (int) $data['id'] : 0,
            isset($data['name']) ? $data['name'] : '',
            isset($data['shortDescription']) ? $data['shortDescription'] : '',
            isset($data['firstType']) ? $data['firstType'] : '',
            isset($data['secondType']) ? $data['secondType'] : '',
            isset($data['evolutionId']) ? (int) $data['evolutionId'] : 0
        );
    }

}