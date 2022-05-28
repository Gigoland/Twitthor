<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class UserPasswordType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_psw_token';
    public const CSRF_TOKEN_ID = 'app_psw_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            ->add('plainPassword', PasswordType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'autocomplete' => 'off',
                ],
                'label' => 'Current password',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\NotBlank(),
                ],
            ])
            ->add('newPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'attr' => [
                        'class' => 'form-control',
                        'autocomplete' => 'off',
                    ],
                    'label' => 'Password',
                    'label_attr' => [
                        'class' => 'form-label mt-4',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ],
                'second_options' => [
                    'attr' => [
                        'class' => 'form-control',
                        'autocomplete' => 'off',
                    ],
                    'label' => 'Repeat paswword',
                    'label_attr' => [
                        'class' => 'form-label mt-4',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ],
                'invalid_message' => 'Incorect password',
            ])

            // Subbmit
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'main-btn primary-btn btn-hover',
                ],
                'label' => 'Save my new password',
            ])
        ;
    }

    /**
     * Configuration with CSRF protection
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_protection' => true,
            'csrf_field_name' => self::CSRF_TOKEN_NAME,
            'csrf_token_id' => self::CSRF_TOKEN_ID,
        ]);
    }
}
