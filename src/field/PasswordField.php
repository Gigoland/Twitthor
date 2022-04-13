<?php

namespace App\Admin\Field;

use EasyCorp\Bundle\EasyAdminBundle\Field\FieldTrait;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use EasyCorp\Bundle\EasyAdminBundle\Contracts\Field\FieldInterface;

final class PasswordField implements FieldInterface
{
    use FieldTrait;

    /**
     * @param string|false|null $label
     */
    public static function new(string $propertyName, $label = null): self
    {
        return (new self())
            ->setProperty($propertyName)
            ->setLabel($label)
            ->setFormType(PasswordType::class)
            ->addCssClass('field-password')
            ->setDefaultColumns('col-md-6 col-xxl-5')
        ;
    }
}
