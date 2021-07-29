<?php

class Employees
{
  private string $company;
  public array $contactInfo = [
    'email' => '',
    'phone' => '',
    'fax' => ''
  ];

  public string $title;
  public string $name;

  public function __construct(string $company, $name, array $contactInfo, string $title = '') {
    $this->company = $company;
    $this->title = $title;
    $this->name = $name;

    $this->contactInfo = $contactInfo;
  }

  public function __destruct()
  {
    echo "<script>console.log('class destructed');</script>";
  }

  public function setCompany(string $company) : void
  {
    $this->company = $company;
  }

  public function getCompany() : string
  {
    return $this->company;
  }
}