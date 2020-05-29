<?php

interface CarService {
    public function getCost();
    public function getDescription();
}

class BasicInspection implements CarService {
    public function getCost()
    {
        return 10;
    }

    public function getDescription(){
        return 'BasicInspection';
    }
}

class OilChange implements CarService {

    protected $carService;

    public function __construct(CarService $carService) {
        $this->carService = $carService;
    }

    public function getCost()
    {
        return $this->carService->getCost() + 13;
    }

    public function getDescription(){
        return $this->carService->getDescription() . ' And OilChange';
    }
}

class TireRotation implements CarService {
    protected $carService;

    public function __construct(CarService $carService) {
        $this->carService = $carService;
    }

    public function getCost()
    {
        return $this->carService->getCost() + 7;
    }

    public function getDescription(){
        return $this->carService->getDescription() . ' And TireRotation';
    }
}

echo (new TireRotation(new BasicInspection ))->getCost();
echo "\n";
echo (new TireRotation(new OilChange( new BasicInspection )))->getCost();
echo "\n";
echo (new OilChange(new TireRotation( new BasicInspection )))->getCost();