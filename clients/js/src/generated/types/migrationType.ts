/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import { Context, Serializer } from '@lorisleiva/js-core';

export enum MigrationType {
  CollectionV1,
  ProgrammableV1,
}

export function getMigrationTypeSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<MigrationType> {
  const s = context.serializer;
  return s.enum<MigrationType>(MigrationType, 'MigrationType');
}