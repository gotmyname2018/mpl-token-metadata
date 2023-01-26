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
  Option,
  Serializer,
} from '@lorisleiva/js-core';
import {
  AuthorizationData,
  AuthorizationDataArgs,
  getAuthorizationDataSerializer,
} from '.';

export type LockArgs = {
  __kind: 'V1';
  authorizationData: Option<AuthorizationData>;
};

export type LockArgsArgs = {
  __kind: 'V1';
  authorizationData: Option<AuthorizationDataArgs>;
};

export function getLockArgsSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<LockArgsArgs, LockArgs> {
  const s = context.serializer;
  return s.dataEnum<LockArgs>(
    [
      [
        'V1',
        s.struct<GetDataEnumKindContent<LockArgs, 'V1'>>(
          [
            [
              'authorizationData',
              s.option(getAuthorizationDataSerializer(context)),
            ],
          ],
          'V1'
        ),
      ],
    ],
    undefined,
    'LockArgs'
  ) as Serializer<LockArgsArgs, LockArgs>;
}

// Data Enum Helpers.
export function lockArgs(
  kind: 'V1',
  data: GetDataEnumKindContent<LockArgsArgs, 'V1'>
): GetDataEnumKind<LockArgsArgs, 'V1'>;
export function lockArgs<K extends LockArgsArgs['__kind']>(
  kind: K,
  data?: any
): Extract<LockArgsArgs, { __kind: K }> {
  return Array.isArray(data)
    ? { __kind: kind, fields: data }
    : { __kind: kind, ...(data ?? {}) };
}
export function isLockArgs<K extends LockArgs['__kind']>(
  kind: K,
  value: LockArgs
): value is LockArgs & { __kind: K } {
  return value.__kind === kind;
}