<?php

class BasicInspection {
    public function getCost()
    {
        return 10;
    }
}

class BasicInspectionAndOilChange {
    public function getCost()
    {
        return 10 + 10;
    }
}

class BasicInspectionAndOilChangeAndTireRotation {
    public function getCost()
    {
        return 10 + 10 + 18;
    }
}

echo (new BasicInspectionAndOilChangeAndTireRotation())->getCost();