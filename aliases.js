var ALIASES = {};
ALIASES["abstract_integers"] = {"..":[{'crate':'abstract_integers','ty':3,'name':'Range','desc':'A (half-open) range bounded inclusively below and…','p':'abstract_integers'},{'crate':'abstract_integers','ty':3,'name':'RangeFrom','desc':'A range only bounded inclusively below (`start..`).','p':'abstract_integers'},{'crate':'abstract_integers','ty':3,'name':'RangeFull','desc':'An unbounded range (`..`).','p':'abstract_integers'},{'crate':'abstract_integers','ty':3,'name':'RangeTo','desc':'A range only bounded exclusively above (`..end`).','p':'abstract_integers'}],"?":[{'crate':'abstract_integers','ty':8,'name':'Try','desc':'A trait for customizing the behavior of the `?` operator.','p':'abstract_integers'}],"*":[{'crate':'abstract_integers','ty':8,'name':'Mul','desc':'The multiplication operator `*`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'DerefMut','desc':'Used for mutable dereferencing operations, like in `*v =…','p':'abstract_integers'}],"..=":[{'crate':'abstract_integers','ty':3,'name':'RangeInclusive','desc':'A range bounded inclusively below and above (`start..=end`).','p':'abstract_integers'},{'crate':'abstract_integers','ty':3,'name':'RangeToInclusive','desc':'A range only bounded inclusively above (`..=end`).','p':'abstract_integers'}],"^=":[{'crate':'abstract_integers','ty':8,'name':'BitXorAssign','desc':'The bitwise XOR assignment operator `^=`.','p':'abstract_integers'}],"&=":[{'crate':'abstract_integers','ty':8,'name':'BitAndAssign','desc':'The bitwise AND assignment operator `&=`.','p':'abstract_integers'}],"^":[{'crate':'abstract_integers','ty':8,'name':'BitXor','desc':'The bitwise XOR operator `^`.','p':'abstract_integers'}],"*=":[{'crate':'abstract_integers','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'abstract_integers'}],"&":[{'crate':'abstract_integers','ty':8,'name':'BitAnd','desc':'The bitwise AND operator `&`.','p':'abstract_integers'}],"|=":[{'crate':'abstract_integers','ty':8,'name':'BitOrAssign','desc':'The bitwise OR assignment operator `|=`.','p':'abstract_integers'}],"[]":[{'crate':'abstract_integers','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'}],"|":[{'crate':'abstract_integers','ty':8,'name':'BitOr','desc':'The bitwise OR operator `|`.','p':'abstract_integers'}],"&*":[{'crate':'abstract_integers','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'abstract_integers'}],"+":[{'crate':'abstract_integers','ty':8,'name':'Add','desc':'The addition operator `+`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'abstract_integers'}],"%":[{'crate':'abstract_integers','ty':8,'name':'Rem','desc':'The remainder operator `%`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'abstract_integers'}],">>=":[{'crate':'abstract_integers','ty':8,'name':'ShrAssign','desc':'The right shift assignment operator `>>=`.','p':'abstract_integers'}],"/":[{'crate':'abstract_integers','ty':8,'name':'Div','desc':'The division operator `/`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'abstract_integers'}],"-=":[{'crate':'abstract_integers','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'abstract_integers'}],">>":[{'crate':'abstract_integers','ty':8,'name':'Shr','desc':'The right shift operator `>>`. Note that because this…','p':'abstract_integers'}],"[":[{'crate':'abstract_integers','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'}],"<<":[{'crate':'abstract_integers','ty':8,'name':'Shl','desc':'The left shift operator `<<`. Note that because this trait…','p':'abstract_integers'}],"-":[{'crate':'abstract_integers','ty':8,'name':'Neg','desc':'The unary negation operator `-`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'Sub','desc':'The subtraction operator `-`.','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'abstract_integers'}],"+=":[{'crate':'abstract_integers','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'abstract_integers'}],"%=":[{'crate':'abstract_integers','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'abstract_integers'}],"/=":[{'crate':'abstract_integers','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'abstract_integers'}],"<<=":[{'crate':'abstract_integers','ty':8,'name':'ShlAssign','desc':'The left shift assignment operator `<<=`.','p':'abstract_integers'}],"]":[{'crate':'abstract_integers','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'},{'crate':'abstract_integers','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'abstract_integers'}],};
ALIASES["aead"] = {};
ALIASES["ansi_term"] = {};
ALIASES["cfg_if"] = {};
ALIASES["generic_array"] = {};
ALIASES["getrandom"] = {};
ALIASES["hacspec_attributes"] = {};
ALIASES["hacspec_bls12_381"] = {};
ALIASES["hacspec_chacha20"] = {};
ALIASES["hacspec_chacha20poly1305"] = {};
ALIASES["hacspec_curve25519"] = {};
ALIASES["hacspec_derive"] = {};
ALIASES["hacspec_dev"] = {};
ALIASES["hacspec_ecdsa_p256_sha256"] = {};
ALIASES["hacspec_gimli"] = {};
ALIASES["hacspec_hkdf"] = {};
ALIASES["hacspec_hmac"] = {};
ALIASES["hacspec_lib"] = {"{:?}":[{'crate':'hacspec_lib','ty':8,'name':'Debug','desc':'`?` formatting.','p':'hacspec_lib::prelude::fmt'},{'crate':'hacspec_lib','ty':8,'name':'Debug','desc':'`?` formatting.','p':'hacspec_lib::prelude'}],"*":[{'crate':'hacspec_lib','ty':8,'name':'Mul','desc':'The multiplication operator `*`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'DerefMut','desc':'Used for mutable dereferencing operations, like in `*v =…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Mul','desc':'The multiplication operator `*`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'DerefMut','desc':'Used for mutable dereferencing operations, like in `*v =…','p':'hacspec_lib::prelude'}],"..=":[{'crate':'hacspec_lib','ty':3,'name':'RangeInclusive','desc':'A range bounded inclusively below and above (`start..=end`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeToInclusive','desc':'A range only bounded inclusively above (`..=end`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeInclusive','desc':'A range bounded inclusively below and above (`start..=end`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeToInclusive','desc':'A range only bounded inclusively above (`..=end`).','p':'hacspec_lib::prelude'}],"^=":[{'crate':'hacspec_lib','ty':8,'name':'BitXorAssign','desc':'The bitwise XOR assignment operator `^=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitXorAssign','desc':'The bitwise XOR assignment operator `^=`.','p':'hacspec_lib::prelude'}],"&=":[{'crate':'hacspec_lib','ty':8,'name':'BitAndAssign','desc':'The bitwise AND assignment operator `&=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitAndAssign','desc':'The bitwise AND assignment operator `&=`.','p':'hacspec_lib::prelude'}],"^":[{'crate':'hacspec_lib','ty':8,'name':'BitXor','desc':'The bitwise XOR operator `^`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitXor','desc':'The bitwise XOR operator `^`.','p':'hacspec_lib::prelude'}],"[]":[{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'}],"+":[{'crate':'hacspec_lib','ty':8,'name':'Add','desc':'The addition operator `+`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Add','desc':'The addition operator `+`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'hacspec_lib::prelude'}],"%":[{'crate':'hacspec_lib','ty':8,'name':'Rem','desc':'The remainder operator `%`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Rem','desc':'The remainder operator `%`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'hacspec_lib::prelude'}],">>=":[{'crate':'hacspec_lib','ty':8,'name':'ShrAssign','desc':'The right shift assignment operator `>>=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'ShrAssign','desc':'The right shift assignment operator `>>=`.','p':'hacspec_lib::prelude'}],"/":[{'crate':'hacspec_lib','ty':8,'name':'Div','desc':'The division operator `/`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Div','desc':'The division operator `/`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'hacspec_lib::prelude'}],"..":[{'crate':'hacspec_lib','ty':3,'name':'Range','desc':'A (half-open) range bounded inclusively below and…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeFrom','desc':'A range only bounded inclusively below (`start..`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeFull','desc':'An unbounded range (`..`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeTo','desc':'A range only bounded exclusively above (`..end`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'Range','desc':'A (half-open) range bounded inclusively below and…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeFrom','desc':'A range only bounded inclusively below (`start..`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeFull','desc':'An unbounded range (`..`).','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':3,'name':'RangeTo','desc':'A range only bounded exclusively above (`..end`).','p':'hacspec_lib::prelude'}],"[":[{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'}],"<<":[{'crate':'hacspec_lib','ty':8,'name':'Shl','desc':'The left shift operator `<<`. Note that because this trait…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Shl','desc':'The left shift operator `<<`. Note that because this trait…','p':'hacspec_lib::prelude'}],"{}":[{'crate':'hacspec_lib','ty':8,'name':'Display','desc':'Format trait for an empty format, `{}`.','p':'hacspec_lib::prelude::fmt'}],"*=":[{'crate':'hacspec_lib','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'MulAssign','desc':'The multiplication assignment operator `*=`.','p':'hacspec_lib::prelude'}],"&":[{'crate':'hacspec_lib','ty':8,'name':'BitAnd','desc':'The bitwise AND operator `&`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitAnd','desc':'The bitwise AND operator `&`.','p':'hacspec_lib::prelude'}],"|=":[{'crate':'hacspec_lib','ty':8,'name':'BitOrAssign','desc':'The bitwise OR assignment operator `|=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitOrAssign','desc':'The bitwise OR assignment operator `|=`.','p':'hacspec_lib::prelude'}],"|":[{'crate':'hacspec_lib','ty':8,'name':'BitOr','desc':'The bitwise OR operator `|`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'BitOr','desc':'The bitwise OR operator `|`.','p':'hacspec_lib::prelude'}],"&*":[{'crate':'hacspec_lib','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Deref','desc':'Used for immutable dereferencing operations, like `*v`.','p':'hacspec_lib::prelude'}],">>":[{'crate':'hacspec_lib','ty':8,'name':'Shr','desc':'The right shift operator `>>`. Note that because this…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Shr','desc':'The right shift operator `>>`. Note that because this…','p':'hacspec_lib::prelude'}],"?":[{'crate':'hacspec_lib','ty':8,'name':'Try','desc':'A trait for customizing the behavior of the `?` operator.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Try','desc':'A trait for customizing the behavior of the `?` operator.','p':'hacspec_lib::prelude'}],"-=":[{'crate':'hacspec_lib','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'hacspec_lib::prelude'}],"!=":[{'crate':'hacspec_lib','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'hacspec_lib::prelude'}],"-":[{'crate':'hacspec_lib','ty':8,'name':'Neg','desc':'The unary negation operator `-`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Sub','desc':'The subtraction operator `-`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Neg','desc':'The unary negation operator `-`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Sub','desc':'The subtraction operator `-`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'SubAssign','desc':'The subtraction assignment operator `-=`.','p':'hacspec_lib::prelude'}],"+=":[{'crate':'hacspec_lib','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'AddAssign','desc':'The addition assignment operator `+=`.','p':'hacspec_lib::prelude'}],"%=":[{'crate':'hacspec_lib','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'RemAssign','desc':'The remainder assignment operator `%=`.','p':'hacspec_lib::prelude'}],"<<=":[{'crate':'hacspec_lib','ty':8,'name':'ShlAssign','desc':'The left shift assignment operator `<<=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'ShlAssign','desc':'The left shift assignment operator `<<=`.','p':'hacspec_lib::prelude'}],"/=":[{'crate':'hacspec_lib','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'DivAssign','desc':'The division assignment operator `/=`.','p':'hacspec_lib::prelude'}],"]":[{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'Index','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'},{'crate':'hacspec_lib','ty':8,'name':'IndexMut','desc':'Used for indexing operations (`container[index]`) in…','p':'hacspec_lib::prelude'}],"==":[{'crate':'hacspec_lib','ty':8,'name':'PartialEq','desc':'Trait for equality comparisons which are partial…','p':'hacspec_lib::prelude'}],};
ALIASES["hacspec_ntru_prime"] = {};
ALIASES["hacspec_p256"] = {};
ALIASES["hacspec_poly1305"] = {};
ALIASES["hacspec_provider"] = {};
ALIASES["hacspec_riot_bootloader"] = {};
ALIASES["hacspec_sha256"] = {};
ALIASES["hacspec_sha3"] = {};
ALIASES["hacspec_util"] = {};
ALIASES["itoa"] = {};
ALIASES["libc"] = {};
ALIASES["num"] = {};
ALIASES["num_bigint"] = {};
ALIASES["num_complex"] = {};
ALIASES["num_integer"] = {};
ALIASES["num_iter"] = {};
ALIASES["num_rational"] = {};
ALIASES["num_traits"] = {};
ALIASES["ppv_lite86"] = {};
ALIASES["proc_macro2"] = {};
ALIASES["quote"] = {};
ALIASES["rand"] = {};
ALIASES["rand_chacha"] = {};
ALIASES["rand_core"] = {};
ALIASES["ryu"] = {};
ALIASES["secret_integers"] = {};
ALIASES["serde"] = {};
ALIASES["serde_derive"] = {};
ALIASES["serde_json"] = {};
ALIASES["syn"] = {};
ALIASES["typenum"] = {};
ALIASES["unicode_xid"] = {};
ALIASES["unsafe_hacspec_examples"] = {};
