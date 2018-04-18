<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 30/03/18
 * Time: 18:38.
 */

namespace App\Exception;

use Exception;
use Symfony\Component\Validator\ConstraintViolationInterface;
use Symfony\Component\Validator\ConstraintViolationListInterface;

class InvalidRequestException extends Exception
{
    const MESSAGE = 'The request is not valid. Check violation list';

    /**
     * @var ConstraintViolationListInterface
     */
    private $violationList;

    public function __construct(ConstraintViolationListInterface $violationList)
    {
        $this->violationList = $violationList;
        parent::__construct(self::MESSAGE);
    }

    /**
     * @return ConstraintViolationListInterface
     */
    public function getViolationList(): ConstraintViolationListInterface
    {
        return $this->violationList;
    }

    public function getViolationListAsArray(): array
    {
        $violations = [];

        /** @var ConstraintViolationInterface $violation */
        foreach ($this->getViolationList() as $violation) {
            $violations[] = [
                'property' => $violation->getPropertyPath(),
                'code' => $violation->getCode(),
                'message' => $violation->getMessage(),
                'root' => $violation->getRoot(),
                'parameters' => $violation->getParameters(),
                'invalidValue' => $violation->getInvalidValue(),
                'messageTemplate' => $violation->getMessageTemplate(),
                'plural' => $violation->getPlural(),
            ];
        }

        return $violations;
    }
}
