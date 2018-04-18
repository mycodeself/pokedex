<?php

namespace App\Service\Request;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadPokemonImageRequest implements RequestInterface
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var UploadedFile
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
