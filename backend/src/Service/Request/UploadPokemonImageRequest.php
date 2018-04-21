<?php

namespace App\Service\Request;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

class UploadPokemonImageRequest implements RequestInterface
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var UploadedFile
     * @Assert\NotBlank
     * @Assert\File(
     *     maxSize = "1M",
     *     mimeTypes = {"image/jpeg", "image/png", "image/gif"},
     *     mimeTypesMessage = "Please upload a valid image (max size 1Mb)"
     * )
     */
    private $image;

    /**
     * UploadPokemonImageRequest constructor.
     *
     * @param int          $id
     * @param UploadedFile $image
     */
    public function __construct(int $id, UploadedFile $image)
    {
        $this->id = $id;
        $this->image = $image;
    }

    /**
     * @return int
     */
    public function id(): int
    {
        return $this->id;
    }

    /**
     * @return UploadedFile
     */
    public function image(): UploadedFile
    {
        return $this->image;
    }
}
