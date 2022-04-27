<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;

class UserEditType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_user_token';
    public const CSRF_TOKEN_ID = 'app_user_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            ->add('twUserId', NumberType::class, [
                'attr' => [
                    'maxlength' => 55,
                ],
                'label' => 'Twitter ID',
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twUsername', TextType::class, [
                'attr' => [
                    'maxlength' => 22,
                ],
                'label' => 'Twitter username',
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('walletEth', TextType::class, [
                'attr' => [
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
                    'maxlength' => 55,
                ],
                'label' => 'Wallet SOL',
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('plainPassword', PasswordType::class, [
                'label' => 'Password',
                'constraints' => [
                    new Assert\NotBlank(),
                ],
                'required' => false,
            ])

            // Subbmit
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'main-btn primary-btn rounded-md btn-hover',
                ],
                'label' => 'Save user',
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
