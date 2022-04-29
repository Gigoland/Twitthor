<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;

class RegistrationType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_signup_token';
    public const CSRF_TOKEN_ID = 'app_signup_csrf';

    /**
     * Form for external user registration only
     *
     * @param FormBuilderInterface $builder
     * @param array $options
     * @return void
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            ->add('email', EmailType::class, [
                'attr' => [
                    'class' => 'form-control rounded-pill border-0 shadow-sm px-4',
                    'minlength' => 1,
                    'maxlength' => 55,
                ],
                'label' => 'Email',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twAccountId', NumberType::class, [
                'attr' => [
                    'class' => 'form-control rounded-pill border-0 shadow-sm px-4',
                    'minlength' => 1,
                    'maxlength' => 55,
                ],
                'label' => 'Twitter ID',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twUsername', TextType::class, [
                'attr' => [
                    'class' => 'form-control rounded-pill border-0 shadow-sm px-4',
                    'minlength' => 1,
                    'maxlength' => 22,
                ],
                'label' => 'Twitter username',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'attr' => [
                        'class' => 'form-control rounded-pill border-0 shadow-sm px-4 text-primary',
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
                        'class' => 'form-control rounded-pill border-0 shadow-sm px-4 text-primary',
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
                    'class' => 'btn btn-primary btn-block text-uppercase mt-4 rounded-pill shadow-sm',
                ],
                'label' => 'Sign-up',
            ])
        ;
    }

    /**
     * Configuration with CSRF protection
     *
     * @param OptionsResolver $resolver
     * @return void
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
