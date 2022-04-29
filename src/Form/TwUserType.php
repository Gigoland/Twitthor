<?php

namespace App\Form;

use App\Entity\TwUser;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class TwUserType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_twuser_token';
    public const CSRF_TOKEN_ID = 'app_twuser_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            ->add('twName', TextType::class, [
                'attr' => [
                    'maxlength' => 22,
                ],
                'label' => 'Twitter name',
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
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
            ->add('twAccountId', NumberType::class, [
                'attr' => [
                    'maxlength' => 20,
                ],
                'label' => 'Twitter ID',
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 20]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twUrl', TextType::class, [
                'attr' => [
                    'maxlength' => 255,
                ],
                'label' => 'Twitter Url',
                'constraints' => [
                    new Assert\Length(['max' => 255]),
                ],
                'required' => false,
            ])
            ->add('twIsVerified', CheckboxType::class, [
                'attr' => [
                    'class' => 'form-check-input',
                ],
                'label' => 'Verified',
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
                'label' => 'Save twitter user',
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
            'data_class' => TwUser::class,
            'csrf_protection' => true,
            'csrf_field_name' => self::CSRF_TOKEN_NAME,
            'csrf_token_id' => self::CSRF_TOKEN_ID,
        ]);
    }
}
