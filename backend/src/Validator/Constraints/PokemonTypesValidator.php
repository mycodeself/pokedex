<?php

namespace App\Validator\Constraints;

use App\Service\Request\CreatePokemonRequest;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

/**
 * Class PokemonTypesValidator.
 */
class PokemonTypesValidator extends ConstraintValidator
{
    /**
     * Checks if the passed value is valid.
     *
     * @param CreatePokemonRequest $value      The value that should be validated
     * @param Constraint           $constraint The constraint for the validation
     */
    public function validate($value, Constraint $constraint)
    {
        if (empty($value->firstType()) && empty($value->firstType())) {
            $this->context->buildViolation('The pokémon has to have at least one type.')
                ->atPath('types')
                ->addViolation();
        }
    }
}
