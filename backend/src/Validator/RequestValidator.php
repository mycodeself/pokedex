<?php
/**
 * Created by PhpStorm.
 * User: user
 * Date: 31/03/18
 * Time: 17:42
 */

namespace App\Validator;


use App\Exception\InvalidRequestException;
use App\Service\Request\RequestInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RequestValidator
{
    /**
     * @var ValidatorInterface
     */
    private $validator;

    /**
     * RequestValidator constructor.
     * @param ValidatorInterface $validator
     */
    public function __construct(ValidatorInterface $validator)
    {
        $this->validator = $validator;
    }

    /**
     * @param RequestInterface $request
     * @throws InvalidRequestException
     */
    public function validate(RequestInterface $request): void
    {
        $violationList = $this->validator->validate($request);

        if(count($violationList) > 0) {
            throw new InvalidRequestException($violationList);
        }
    }

}