/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  Context,
  GetDataEnumKind,
  GetDataEnumKindContent,
  Serializer,
} from '@lorisleiva/js-core';

export type CollectionDetails = { __kind: 'V1'; size: bigint };

export type CollectionDetailsArgs = { __kind: 'V1'; size: number | bigint };

export function getCollectionDetailsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<CollectionDetailsArgs, CollectionDetails> {
  const s = context.serializer;
  return s.dataEnum<CollectionDetails>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<CollectionDetails, 'V1'>>(
          [['size', s.u64]],
          'V1'
        ),
      ],
    ],
    undefined,
    'CollectionDetails'
  ) as Serializer<CollectionDetailsArgs, CollectionDetails>;
}

// Data Enum Helpers.
export function collectionDetails(
  kind: 'V1',
  data: GetDataEnumKindContent<CollectionDetails, 'V1'>
): GetDataEnumKind<CollectionDetails, 'V1'>;
export function collectionDetails<K extends CollectionDetails['__kind']>(
  kind: K,
  data?: any
): CollectionDetails & { __kind: K } {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isCollectionDetails<K extends CollectionDetails['__kind']>(
  kind: K,
  value: CollectionDetails
): value is CollectionDetails & { __kind: K } {
  return value.__kind === kind;
}