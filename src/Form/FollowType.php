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
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
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
            ->add('isFavorite', CheckboxType::class, [
                'label' => 'My favorite',
                'label_attr' => [
                    'class' => 'checkbox-inline checkbox-switch mt-4',
                ],
                'required' => false,
            ])
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'btn btn-primary mt-4',
                ],
                'label' => 'Save follow',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Follow::class,
        ]);
    }
}
