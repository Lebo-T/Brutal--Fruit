<?php

namespace Drupal\blazy\Dejavu;

/**
 * Defines interop form methods for different or competing sub-modules.
 *
 * So that Slick can be interchanged with Splide at 3.+, etc. by 3rd-tiers.
 */
interface BlazyAdminInteropInterface {

  /**
   * Modifies the main form elements.
   */
  public function buildSettingsForm(array &$form, $definition = []): void;

  /**
   * Modifies the opening form elements.
   */
  public function openingForm(array &$form, &$definition = []): void;

  /**
   * Modifies the image formatter form elements.
   */
  public function mediaSwitchForm(array &$form, $definition = []): void;

  /**
   * Modifies the image formatter form elements.
   */
  public function imageStyleForm(array &$form, $definition = []): void;

  /**
   * Modifies re-usable fieldable formatter form elements.
   */
  public function fieldableForm(array &$form, $definition = []): void;

  /**
   * Modifies re-usable grid elements across Slick field formatter and Views.
   */
  public function gridForm(array &$form, $definition = []): void;

  /**
   * Modifies the closing ending form elements.
   */
  public function closingForm(array &$form, $definition = []): void;

  /**
   * Modifies re-usable logic, styling and assets across fields and Views.
   */
  public function finalizeForm(array &$form, $definition = []): void;

}
