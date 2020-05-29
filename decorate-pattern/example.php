<?php

interface CarService {
    public function getCost();
}

class BasicInspection implements CarService {
    public function getCost()
    {
        return 10;
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
}

echo (new TireRotation(new BasicInspection ))->getCost();
echo "\n";
echo (new TireRotation(new OilChange( new BasicInspection )))->getCost();
echo "\n";
echo (new OilChange(new TireRotation( new BasicInspection )))->getCost();