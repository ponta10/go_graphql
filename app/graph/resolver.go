package graph

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

import (
	"go_graphql/graph/model"
)

// Resolver構造体は、GraphQLスキーマのフィールドに対応する操作を実装するために使用されます。この特定のResolver構造体は、todosというフィールドを持つ[]*model.Todo型のスライスを保持します。
// todosフィールドは、作成されたTodoのリストを保持するために使用されます。このフィールドは、Todoの作成や取得などの操作によって変更される可能性があります。
type Resolver struct{
    todos []*model.Todo
}
