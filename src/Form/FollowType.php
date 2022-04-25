<?php

namespace App\Form;

use App\Entity\Follow;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class FollowType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_follow_token';
    public const CSRF_TOKEN_ID = 'app_follow_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')
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
            ->add('isFavorite', CheckboxType::class, [
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label' => 'My favorite',
                'label_attr' => [
                    'class' => 'form-check-label',
                ],
                'required' => false,
            ])

            // Subbmit
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'main-btn primary-btn rounded-md btn-hover',
                ],
                'label' => 'Save follow',
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
            'data_class' => Follow::class,
            'csrf_protection' => true,
            'csrf_field_name' => self::CSRF_TOKEN_NAME,
            'csrf_token_id' => self::CSRF_TOKEN_ID,
        ]);
    }
}
