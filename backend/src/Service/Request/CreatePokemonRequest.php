<?php

namespace App\Service\Request;

use Symfony\Component\Validator\Constraints as Assert;


/**
 * Class CreatePokemonRequest
 */
class CreatePokemonRequest implements RequestInterface
{
    /**
     * @var string
     * @Assert\NotBlank()
     * @Assert\Length(min="4", max="24")
     */
    protected $name;

    /**
     * @var string
     * @Assert\NotBlank()
     * @Assert\Length(min="30")
     */
    protected $description;

    /**
     * @var string
     */
    protected $firstType;

    /**
     * @var string
     */
    protected $secondType;

    /**
     * @var int
     */
    protected $evolutionId;

    /**
     * CreatePokemonRequest constructor.
     * @param string $name
     * @param string $description
     * @param string $firstType
     * @param string $secondType
     * @param int $evolutionId
     */
    public function __construct(
        string $name,
        string $description,
        string $firstType,
        string $secondType = '',
        ?int $evolutionId = null
    )
    {
        $this->name = $name;
        $this->description = $description;
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
        return $this->description;
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
     * @return static
     */
    public static function fromArray(array $data)
    {
        return new static(
            isset($data['name']) ? $data['name'] : '',
            isset($data['description']) ? $data['description'] : '',
            isset($data['firstType']) ? $data['firstType'] : '',
            isset($data['secondType']) ? $data['secondType'] : '',
            isset($data['evolutionId']) ? $data['evolutionId'] : null
        );
    }

}