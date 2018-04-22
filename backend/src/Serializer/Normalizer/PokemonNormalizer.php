<?php

namespace App\Serializer\Normalizer;

use App\Entity\Pokemon;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Serializer\Exception\CircularReferenceException;
use Symfony\Component\Serializer\Exception\InvalidArgumentException;
use Symfony\Component\Serializer\Exception\LogicException;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * Class PokemonNormalizer.
 */
class PokemonNormalizer implements NormalizerInterface
{
    /**
     * @var RequestStack
     */
    private $requestStack;

    /**
     * PokemonNormalizer constructor.
     *
     * @param RequestStack $requestStack
     */
    public function __construct(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    /**
     * Normalizes an object into a set of arrays/scalars.
     *
     * @param Pokemon $object  Object to normalize
     * @param string  $format  Format the normalization result will be encoded as
     * @param array   $context Context options for the normalizer
     *
     * @return array|string|int|float|bool
     *
     * @throws InvalidArgumentException   Occurs when the object given is not an attempted type for the normalizer
     * @throws CircularReferenceException Occurs when the normalizer detects a circular reference when no circular
     *                                    reference handler can fix it
     * @throws LogicException             Occurs when the normalizer is not called in an expected context
     */
    public function normalize($object, $format = null, array $context = [])
    {
        $request = $this->requestStack->getCurrentRequest();

        $imageUrl = $object->image()
            ? $request->getUriForPath(sprintf('/uploads/pokemons/%s', $object->image()))
            : '';

        $evolutionArray = [];

        if($object->evolution() instanceof Pokemon) {
            $evolution = $object->evolution();
            $evolutionArray = [
                'id' => $evolution->id(),
                'name' => $evolution->name(),
                'description' => $evolution->description(),
                'firstType' => $evolution->types()->primaryType(),
                'secondType' => $evolution->types()->secondaryType(),
            ];
        }


        return [
            'id' => $object->id(),
            'name' => $object->name(),
            'description' => $object->description(),
            'firstType' => $object->types()->primaryType(),
            'secondType' => $object->types()->secondaryType(),
            'evolution' => $evolutionArray,
            'image' => $object->image(),
            'imageUrl' => $imageUrl,
        ];
    }

    /**
     * Checks whether the given class is supported for normalization by this normalizer.
     *
     * @param mixed  $data   Data to normalize
     * @param string $format The format being (de-)serialized from or into
     *
     * @return bool
     */
    public function supportsNormalization($data, $format = null)
    {
        return $data instanceof Pokemon;
    }
}
