// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'spaceship_detail.dart';

// **************************************************************************
// TypeAdapterGenerator
// **************************************************************************

class SpaceshipTypeAdapter extends TypeAdapter<SpaceshipType> {
  @override
  final int typeId = 1;

  @override
  SpaceshipType read(BinaryReader reader) {
    switch (reader.readByte()) {
      case 0:
        return SpaceshipType.Test;
      case 1:
        return SpaceshipType.Albatross;
      case 2:
        return SpaceshipType.Boramae;
      case 3:
        return SpaceshipType.Canary;
      case 4:
        return SpaceshipType.Dusky;
      case 5:
        return SpaceshipType.Raptor;
      default:
        return SpaceshipType.Test;
    }
  }

  @override
  void write(BinaryWriter writer, SpaceshipType obj) {
    switch (obj) {
      case SpaceshipType.Test:
        writer.writeByte(0);
        break;
      case SpaceshipType.Albatross:
        writer.writeByte(1);
        break;
      case SpaceshipType.Boramae:
        writer.writeByte(2);
        break;
      case SpaceshipType.Canary:
        writer.writeByte(3);
        break;
      case SpaceshipType.Dusky:
        writer.writeByte(4);
        break;
      case SpaceshipType.Raptor:
        writer.writeByte(5);
        break;
    }
  }

  @override
  int get hashCode => typeId.hashCode;

  @override
  bool operator ==(Object other) =>
      identical(this, other) ||
      other is SpaceshipTypeAdapter &&
          runtimeType == other.runtimeType &&
          typeId == other.typeId;
}
