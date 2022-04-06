<?php

namespace App\Form;

use App\Entity\TwApi;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class TwApiType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('consumerKey', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'CONSUMER_KEY',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('consumerSecret', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'CONSUMER_SECRET',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('accessToken', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'ACCESS_TOKEN',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('accessTokenSecret', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'ACCESS_TOKEN_SECRET',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('bearerToken', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'BEARER_TOKEN',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('accountId', NumberType::class, [
                'attr' => [
                    'class' => 'form-control',
                ],
                'label' => 'ACCOUNT_ID',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
            ])
            ->add('accountName', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 255,
                ],
                'label' => 'ACCOUNT_NAME',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 255]),
                ],
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4',
                ],
                'label' => 'Save configuration',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => TwApi::class,
        ]);
    }
}
