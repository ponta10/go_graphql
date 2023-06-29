package main

import (
	"go_graphql/graph"
	"log"
	"os"

	"github.com/99designs/gqlgen/graphql/handler"
	"github.com/99designs/gqlgen/graphql/playground"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

const defaultPort = "8084"

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = defaultPort
	}

	r := gin.Default()
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Length", "Content-Type"},
		AllowCredentials: true,
	}))

	srv := handler.NewDefaultServer(graph.NewExecutableSchema(graph.Config{Resolvers: &graph.Resolver{}}))

	r.GET("/", gin.WrapF(playground.Handler("GraphQL playground", "/query")))
	r.POST("/query", gin.WrapH(srv))

	log.Printf("connect to http://localhost:%s/ for GraphQL playground", port)
	r.Run(":" + port) // デフォルトでPanicが発生するので、log.Fatalは不要
}
