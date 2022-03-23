<?php

namespace App\Form;

use App\Entity\Follower;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class FollowerType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('twUserId', NumberType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 55,
                ],
                'label' => 'Twetter ID',
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
                    'class' => 'form-control',
                    'maxlength' => 22,
                ],
                'label' => 'Twetter username',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twName', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 55,
                ],
                'label' => 'Twetter name',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                    new Assert\NotBlank(),
                ],
            ])
            ->add('twVerified', CheckboxType::class, [
                'label' => 'Twetter verified',
                'label_attr' => [
                    'class' => 'checkbox-inline checkbox-switch mt-4',
                ],
                'required' => false,
            ])
            ->add('walletEth', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 55,
                ],
                'label' => 'Wallet ETH',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('walletSol', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'maxlength' => 55,
                ],
                'label' => 'Wallet SOL',
                'label_attr' => [
                    'class' => 'form-label mt-4',
                ],
                'required' => false,
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
            ])
            ->add('favorite', CheckboxType::class, [
                'label' => 'Twetter verified',
                'label_attr' => [
                    'class' => 'checkbox-inline checkbox-switch mt-4',
                ],
                'required' => false,
            ])
            //->add('createAt')
            //->add('updateAt')
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4',
                ],
                'label' => 'Add follower',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Follower::class,
        ]);
    }
}
