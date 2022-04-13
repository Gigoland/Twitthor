<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class RegistrationType extends AbstractType
{
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
                    'class' => 'form-control',
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
            ->add('twUserId', NumberType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'minlength' => 1,
                    'maxlength' => 55,
                ],
                'label' => 'Twitter ID',
                'label_attr' => [
                    'class' => 'form-label',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 55]),
                ],
                'required' => false,
            ])
            ->add('twUsername', TextType::class, [
                'attr' => [
                    'class' => 'form-control',
                    'minlength' => 1,
                    'maxlength' => 22,
                ],
                'label' => 'Twitter username',
                'label_attr' => [
                    'class' => 'form-label',
                ],
                'constraints' => [
                    new Assert\Length(['min' => 1, 'max' => 22]),
                ],
                'required' => false,
            ])
            ->add('plainPassword', RepeatedType::class, [
                'type' => PasswordType::class,
                'label' => 'Password',
                'first_options' => [
                    'attr' => [
                        'class' => 'form-control',
                    ],
                    'label' => false,
                    'label_attr' => [
                        'class' => 'form-label',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ],
                'second_options' => [
                    'attr' => [
                        'class' => 'form-control',
                    ],
                    'label' => 'Repeat passwword',
                    'label_attr' => [
                        'class' => 'form-label',
                    ],
                    'constraints' => [
                        new Assert\NotBlank(),
                    ],
                ],
                'invalid_message' => 'Passwords should be the same',
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
            'csrf_field_name' => '_token',
            'csrf_token_id' => 'registration_csrf_token',
        ]);
    }
}
