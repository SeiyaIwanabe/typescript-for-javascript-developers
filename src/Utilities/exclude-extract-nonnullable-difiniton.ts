export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

// Exclude 特定の型アノテーションを除外する
type MyExclude = DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
type NoneFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
type MyFunctionType = MyExclude;

// Extract
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByEXtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// Nullable
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
