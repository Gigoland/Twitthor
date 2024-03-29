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

class UserNewType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_user_token';
    public const CSRF_TOKEN_ID = 'app_user_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            ->add('email', EmailType::class, [
                'attr' => [
                    'autocomplete' => 'off',
                    'minlength' => 5,
                    'maxlength' => 180,
                ],
                'label' => 'Email',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 5, 'max' => 180]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twAccountId', NumberType::class, [
                'attr' => [
                    'autocomplete' => 'off',
                    'maxlength' => 55,
                ],
                'label' => 'Twitter ID',
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('twUsername', TextType::class, [
                'attr' => [
                    'autocomplete' => 'off',
                    'maxlength' => 22,
                ],
                'label' => 'Twitter username',
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
                ],
            ])
            ->add('walletEth', TextType::class, [
                'attr' => [
                    'autocomplete' => 'off',
                    'maxlength' => 55,
                ],
                'label' => 'Wallet ETH',
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('walletSol', TextType::class, [
                'attr' => [
                    'autocomplete' => 'off',
                    'maxlength' => 55,
                ],
                'label' => 'Wallet SOL',
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options' => [
                    'label' => 'Password',
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ],
                'second_options' => [
                    'label' => 'Repeat paswword',
                    'label_attr' => [
                        'class' => 'mt-4',
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
                    'class' => 'main-btn primary-btn rounded-md btn-hover',
                ],
                'label' => 'Create new user',
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
