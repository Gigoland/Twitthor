<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;

class AjaxEasyType extends AbstractType
{
    public const CSRF_TOKEN_NAME = '_twitthor_ajax_token';
    public const CSRF_TOKEN_ID = 'app_ajax_csrf';

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->setMethod('POST')

            // Subbmit
            ->add('submit', SubmitType::class, [
                'attr' => [
                    'class' => 'main-btn primary-btn rounded-md btn-hover',
                ],
                'label_html' => true,
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
            'csrf_protection' => true,
            'csrf_field_name' => self::CSRF_TOKEN_NAME,
            'csrf_token_id' => self::CSRF_TOKEN_ID,
        ]);
    }
}
