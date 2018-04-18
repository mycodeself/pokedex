<?php

$srcDir = __DIR__ . '/src';

$finder = PhpCsFixer\Finder::create()
    ->in($srcDir)
;

return PhpCsFixer\Config::create()
    ->setRules([
        '@Symfony' => true,
        'protected_to_private' => false,
        'array_syntax' => ['syntax' => 'short'],
    ])
    ->setFinder($finder);