export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Ingredient: {
        Row: {
          amount: number
          id: string
          name: string
          recipeId: string
          unit: Database["public"]["Enums"]["Unit"]
        }
        Insert: {
          amount: number
          id: string
          name: string
          recipeId: string
          unit: Database["public"]["Enums"]["Unit"]
        }
        Update: {
          amount?: number
          id?: string
          name?: string
          recipeId?: string
          unit?: Database["public"]["Enums"]["Unit"]
        }
        Relationships: [
          {
            foreignKeyName: "Ingredient_recipeId_fkey"
            columns: ["recipeId"]
            referencedRelation: "Recipe"
            referencedColumns: ["id"]
          }
        ]
      }
      ProductCategory: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      ProductType: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      Recipe: {
        Row: {
          id: string
          name: string
          productCategoryId: string
          productTypeId: string
          seasonId: string
        }
        Insert: {
          id: string
          name: string
          productCategoryId: string
          productTypeId: string
          seasonId: string
        }
        Update: {
          id?: string
          name?: string
          productCategoryId?: string
          productTypeId?: string
          seasonId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Recipe_productCategoryId_fkey"
            columns: ["productCategoryId"]
            referencedRelation: "ProductCategory"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Recipe_productTypeId_fkey"
            columns: ["productTypeId"]
            referencedRelation: "ProductType"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Recipe_seasonId_fkey"
            columns: ["seasonId"]
            referencedRelation: "Season"
            referencedColumns: ["id"]
          }
        ]
      }
      Season: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      Unit: "ml" | "mg"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
