var docData = {"packages":[{"isSingleFile":false,"description":"","modules":[{"id":"lang.transaction","summary":"This module provides lang library operations on \"transaction\"s.","description":"## Module Overview\n\nThis module provides lang library operations on `transaction`s.","orgName":"ballerina","version":"0.0.1","records":[{"fields":[{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"xid","description":"Unique identifier for the transaction branch\n","isDeprecated":false},{"defaultValue":"","type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"retryNumber","description":"The number of previous attempts in a sequence of retries\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"Info","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"prevAttempt","description":"Information about the previous attempt in a sequence of retries.\nThis will be `()` if the `retryNumber` is 0.\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"Timestamp","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"startTime","description":"The time at which the transaction was started.\n","isDeprecated":false}],"isClosed":true,"name":"Info","description":"Information about a transaction that does not change\nafter the transaction is started.\n","isDeprecated":false}],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":true,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"any","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}},{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"","description":"the data, or `()` if no data has been set.\n","isDeprecated":false}],"name":"getData","description":"Retrieves data associated with the current transaction branch.\nThe data is set using `setData`.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"name":"byte","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"xid","description":"","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"Info","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"getInfo","description":"Returns information about the transaction with\nthe specified xid.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"true if it is known that the transaction manager will,\nwhen it makes the decision whether to commit or rollback, decide\nto rollback\n","isDeprecated":false}],"name":"getRollbackOnly","description":"Tells whether it is known that the transaction will be rolled back.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"Info","category":"records","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"info","description":"Returns information about the current transaction\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"CommitHandler","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"handler","description":"the function to be called on commit\n","isDeprecated":false}],"returnParameters":[],"name":"onCommit","description":"Adds a handler to be called if and when the global transaction commits.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"RollbackHandler","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"handler","description":"the function to be called on rollback\n","isDeprecated":false}],"returnParameters":[],"name":"onRollback","description":"Adds a handler to be called if and when the global transaction rolls back.\n\n","isDeprecated":false},{"isIsolated":false,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"string","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"message","description":"Error message\n","isDeprecated":false},{"defaultValue":"()","type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"err","description":"`error` instance\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.transaction","version":"0.0.1","name":"Error","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"Prepared `Error` instance\n","isDeprecated":false}],"name":"prepareError","description":"Log and prepare `error` as a `Error`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":true,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0,"elementType":{"isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"any","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}},{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},"name":"e","description":"","isDeprecated":false}],"returnParameters":[],"name":"setData","description":"Associates some data with the current transaction branch.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"e","description":"","isDeprecated":false}],"returnParameters":[],"name":"setRollbackOnly","description":"Prevents the global transaction from committing successfully.\nThis ask the transaction manager that when it makes the decision\nwhether to commit or rollback, it should decide to rollback.\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[{"name":"Error","description":"Type of error returned by commit action.\n","isDeprecated":false}],"types":[{"name":"Timestamp","description":"An instant in time.\n","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":true,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"readonly","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"object {\n    # Returns milliseconds since 1970-01-01T00:00:00Z, not including leap seconds\n    public function toMillisecondsInt() returns int;\n    # Returns a string representation of the timestamp in ISO 8601 format\n    public function toString() returns string;\n}","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}],"enums":[]}],"name":"lang.transaction","orgName":"ballerina","version":"0.0.1","summary":"This module provides lang library operations on \"transaction\"s."}]};