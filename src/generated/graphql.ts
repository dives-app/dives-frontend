import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  balance: Scalars['Float'];
  billingDate?: Maybe<Scalars['String']>;
  billingPeriod?: Maybe<Scalars['Float']>;
  color: Scalars['String'];
  currency: Scalars['String'];
  cycleTransaction: Array<CycleTransaction>;
  description?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  id: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  owner: User;
  transactions: Array<Transaction>;
  type: Scalars['Float'];
};

export type Budget = {
  __typename?: 'Budget';
  categories: Array<Category>;
  cycleTransactions: Array<CycleTransaction>;
  id: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  membership: Array<BudgetMembership>;
  merchants: Array<Merchant>;
  name: Scalars['String'];
  transactions: Array<Transaction>;
};

export type BudgetMembership = {
  __typename?: 'BudgetMembership';
  accessLevel: Scalars['String'];
  budget: Budget;
  user: User;
};

export type Category = {
  __typename?: 'Category';
  color: Scalars['String'];
  cycleTransactions: Array<CycleTransaction>;
  icon: Scalars['String'];
  id: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  ownerBudget?: Maybe<Budget>;
  ownerUser?: Maybe<User>;
  transactions: Array<Transaction>;
  type: Scalars['Float'];
};

export type CycleTransaction = {
  __typename?: 'CycleTransaction';
  account: Account;
  amount?: Maybe<Scalars['Float']>;
  budget?: Maybe<Budget>;
  category: Category;
  creator?: Maybe<User>;
  date: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  merchant?: Maybe<Merchant>;
  name: Scalars['String'];
  period: Scalars['Float'];
};

export type Debt = {
  __typename?: 'Debt';
  balance: Scalars['Float'];
  color: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['String'];
  icon: Scalars['String'];
  id: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  owner: User;
};

export type Merchant = {
  __typename?: 'Merchant';
  cycleTransactions: Array<CycleTransaction>;
  id: Scalars['String'];
  name: Scalars['String'];
  ownerBudget?: Maybe<Budget>;
  ownerUser?: Maybe<User>;
  transactions: Array<Transaction>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addBudgetMember: Scalars['Boolean'];
  createAccount: Account;
  createBudget: Budget;
  createCategory: Category;
  createCycleTransaction: CycleTransaction;
  createDebt: Debt;
  createMerchant: Merchant;
  createNotification: Notification;
  createPurchase: Purchase;
  createTransaction: Transaction;
  deleteAccount: Account;
  deleteBudget: Budget;
  deleteCategory: Category;
  deleteCycleTransaction: CycleTransaction;
  deleteDebt: Debt;
  deleteMerchant: Merchant;
  deleteNotification: Notification;
  deletePurchase: Purchase;
  deleteTransaction: Transaction;
  deleteUser: User;
  register: User;
  removeBudgetMember: Scalars['Boolean'];
  revokeToken: Scalars['Boolean'];
  updateAccount: Account;
  updateBudget: Budget;
  updateCategory: Category;
  updateCycleTransaction: CycleTransaction;
  updateDebt: Debt;
  updateMerchant: Merchant;
  updateNotification: Notification;
  updatePurchase: Purchase;
  updateTransaction: Transaction;
  updateUser: User;
};

export type MutationAddBudgetMemberArgs = {
  options: AddBudgetMemberInput;
};

export type MutationCreateAccountArgs = {
  options: NewAccountInput;
};

export type MutationCreateBudgetArgs = {
  options: NewBudgetInput;
};

export type MutationCreateCategoryArgs = {
  options: NewCategoryInput;
};

export type MutationCreateCycleTransactionArgs = {
  options: NewCycleTransactionInput;
};

export type MutationCreateDebtArgs = {
  options: NewDebtInput;
};

export type MutationCreateMerchantArgs = {
  options: NewMerchantInput;
};

export type MutationCreateNotificationArgs = {
  options: NewNotificationInput;
};

export type MutationCreatePurchaseArgs = {
  options: NewPurchaseInput;
};

export type MutationCreateTransactionArgs = {
  options: NewTransactionInput;
};

export type MutationDeleteAccountArgs = {
  options: AccountInput;
};

export type MutationDeleteBudgetArgs = {
  options: BudgetInput;
};

export type MutationDeleteCategoryArgs = {
  options: CategoryInput;
};

export type MutationDeleteCycleTransactionArgs = {
  options: CycleTransactionInput;
};

export type MutationDeleteDebtArgs = {
  options: DebtInput;
};

export type MutationDeleteMerchantArgs = {
  options: MerchantInput;
};

export type MutationDeleteNotificationArgs = {
  options: NotificationInput;
};

export type MutationDeletePurchaseArgs = {
  options: PurchaseInput;
};

export type MutationDeleteTransactionArgs = {
  options: TransactionInput;
};

export type MutationRegisterArgs = {
  options: NewUserInput;
};

export type MutationRemoveBudgetMemberArgs = {
  options: RemoveBudgetMemberInput;
};

export type MutationUpdateAccountArgs = {
  options: UpdateAccountInput;
};

export type MutationUpdateBudgetArgs = {
  options: UpdateBudgetInput;
};

export type MutationUpdateCategoryArgs = {
  options: UpdateCategoryInput;
};

export type MutationUpdateCycleTransactionArgs = {
  options: UpdateCycleTransactionInput;
};

export type MutationUpdateDebtArgs = {
  options: UpdateDebtInput;
};

export type MutationUpdateMerchantArgs = {
  options: UpdateMerchantInput;
};

export type MutationUpdateNotificationArgs = {
  options: UpdateNotificationInput;
};

export type MutationUpdatePurchaseArgs = {
  options: UpdatePurchaseInput;
};

export type MutationUpdateTransactionArgs = {
  options: UpdateTransactionInput;
};

export type MutationUpdateUserArgs = {
  options: UpdateUserInput;
};

export type Notification = {
  __typename?: 'Notification';
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  read: Scalars['String'];
  text: Scalars['String'];
  time: Scalars['String'];
  user: User;
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  purchases: Purchase;
};

export type Purchase = {
  __typename?: 'Purchase';
  currency: Scalars['String'];
  endDate: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  plan: Plan;
  price: Scalars['Float'];
  startDate: Scalars['String'];
  user: User;
};

export type Query = {
  __typename?: 'Query';
  account: Account;
  budget: Budget;
  category: Category;
  cycleTransaction: CycleTransaction;
  debt: Debt;
  login: User;
  logout: Scalars['Boolean'];
  merchant: Merchant;
  notification: Notification;
  purchase: Purchase;
  transaction: Transaction;
  user: User;
};

export type QueryAccountArgs = {
  options: AccountInput;
};

export type QueryBudgetArgs = {
  options: BudgetInput;
};

export type QueryCategoryArgs = {
  options: CategoryInput;
};

export type QueryCycleTransactionArgs = {
  options: CycleTransactionInput;
};

export type QueryDebtArgs = {
  options: DebtInput;
};

export type QueryLoginArgs = {
  options: UserInput;
};

export type QueryMerchantArgs = {
  options: MerchantInput;
};

export type QueryNotificationArgs = {
  options: NotificationInput;
};

export type QueryPurchaseArgs = {
  options: PurchaseInput;
};

export type QueryTransactionArgs = {
  options: TransactionInput;
};

export type Transaction = {
  __typename?: 'Transaction';
  account: Account;
  amount: Scalars['Float'];
  budget?: Maybe<Budget>;
  category: Category;
  creator?: Maybe<User>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  merchant?: Maybe<Merchant>;
  name: Scalars['String'];
  time: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accounts: Array<Account>;
  birthDate?: Maybe<Scalars['String']>;
  budgetMembership: Array<BudgetMembership>;
  categories: Array<Category>;
  country?: Maybe<Scalars['String']>;
  cycleTransactions: Array<CycleTransaction>;
  debts: Array<Debt>;
  email: Scalars['String'];
  id: Scalars['String'];
  merchants: Array<Merchant>;
  name: Scalars['String'];
  notifications: Array<Notification>;
  photoUrl?: Maybe<Scalars['String']>;
  purchases: Array<Purchase>;
  transactions: Array<Transaction>;
  updatePhotoUrl?: Maybe<Scalars['String']>;
};

export type AccountInput = {
  id: Scalars['String'];
};

export type AddBudgetMemberInput = {
  accessLevel?: Maybe<Scalars['String']>;
  budgetId: Scalars['String'];
  email: Scalars['String'];
};

export type BudgetInput = {
  id: Scalars['String'];
};

export type CategoryInput = {
  id: Scalars['String'];
};

export type CycleTransactionInput = {
  id: Scalars['String'];
};

export type DebtInput = {
  id: Scalars['String'];
};

export type MerchantInput = {
  id: Scalars['String'];
};

export type NewAccountInput = {
  balance: Scalars['Float'];
  color: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  icon: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['Float'];
};

export type NewBudgetInput = {
  limit?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type NewCategoryInput = {
  color: Scalars['String'];
  icon: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  ownerBudget?: Maybe<Scalars['String']>;
  type: Scalars['Float'];
};

export type NewCycleTransactionInput = {
  accountId?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  categoryId: Scalars['String'];
  date: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  period: Scalars['Float'];
};

export type NewDebtInput = {
  balance: Scalars['Float'];
  color: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  endDate: Scalars['String'];
  icon: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
};

export type NewMerchantInput = {
  name: Scalars['String'];
};

export type NewNotificationInput = {
  action?: Maybe<Scalars['String']>;
  read: Scalars['String'];
  text: Scalars['String'];
  time: Scalars['String'];
};

export type NewPurchaseInput = {
  currency: Scalars['String'];
  endDate: Scalars['String'];
  name: Scalars['String'];
  planId: Scalars['String'];
  price: Scalars['Float'];
  startDate: Scalars['String'];
};

export type NewTransactionInput = {
  accountId: Scalars['String'];
  amount: Scalars['Float'];
  categoryId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  time: Scalars['String'];
};

export type NewUserInput = {
  birthDate?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type NotificationInput = {
  id: Scalars['String'];
};

export type PurchaseInput = {
  id: Scalars['String'];
};

export type RemoveBudgetMemberInput = {
  budgetId: Scalars['String'];
  userId: Scalars['String'];
};

export type TransactionInput = {
  id: Scalars['String'];
};

export type UpdateAccountInput = {
  balance?: Maybe<Scalars['Float']>;
  billingDate?: Maybe<Scalars['String']>;
  billingPeriod?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
};

export type UpdateBudgetInput = {
  id: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
};

export type UpdateCycleTransactionInput = {
  accountId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  budgetId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  merchantId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Float']>;
};

export type UpdateDebtInput = {
  balance?: Maybe<Scalars['Float']>;
  color?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  name?: Maybe<Scalars['String']>;
};

export type UpdateMerchantInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type UpdateNotificationInput = {
  action?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  read?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type UpdatePurchaseInput = {
  currency?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  startDate?: Maybe<Scalars['String']>;
};

export type UpdateTransactionInput = {
  accountId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  budgetId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  merchantId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  birthDate?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** filename with extension to upload */
  photo?: Maybe<Scalars['String']>;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type CreateTransactionMutationVariables = Exact<{
  options: NewTransactionInput;
}>;

export type CreateTransactionMutation = { __typename?: 'Mutation' } & {
  createTransaction: { __typename?: 'Transaction' } & Pick<
    Transaction,
    'id' | 'name' | 'time' | 'amount'
  > & { category: { __typename?: 'Category' } & Pick<Category, 'icon' | 'color'> };
};

export type RegisterMutationVariables = Exact<{
  options: NewUserInput;
}>;

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type LoginQueryVariables = Exact<{
  options: UserInput;
}>;

export type LoginQuery = { __typename?: 'Query' } & {
  login: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type LogoutQueryVariables = Exact<{ [key: string]: never }>;

export type LogoutQuery = { __typename?: 'Query' } & Pick<Query, 'logout'>;

export type RecentTransactionsQueryVariables = Exact<{ [key: string]: never }>;

export type RecentTransactionsQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & {
    transactions: Array<
      { __typename?: 'Transaction' } & Pick<Transaction, 'id' | 'name' | 'time' | 'amount'> & {
          category: { __typename?: 'Category' } & Pick<Category, 'icon' | 'color'>;
        }
    >;
  };
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>;
};

export const CreateTransactionDocument = gql`
  mutation CreateTransaction($options: NewTransactionInput!) {
    createTransaction(options: $options) {
      id
      name
      time
      amount
      category {
        icon
        color
      }
    }
  }
`;
export type CreateTransactionMutationFn = Apollo.MutationFunction<
  CreateTransactionMutation,
  CreateTransactionMutationVariables
>;

/**
 * __useCreateTransactionMutation__
 *
 * To run a mutation, you first call `useCreateTransactionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTransactionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTransactionMutation, { data, loading, error }] = useCreateTransactionMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useCreateTransactionMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTransactionMutation,
    CreateTransactionMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTransactionMutation, CreateTransactionMutationVariables>(
    CreateTransactionDocument,
    options,
  );
}
export type CreateTransactionMutationHookResult = ReturnType<typeof useCreateTransactionMutation>;
export type CreateTransactionMutationResult = Apollo.MutationResult<CreateTransactionMutation>;
export type CreateTransactionMutationOptions = Apollo.BaseMutationOptions<
  CreateTransactionMutation,
  CreateTransactionMutationVariables
>;
export const RegisterDocument = gql`
  mutation Register($options: NewUserInput!) {
    register(options: $options) {
      id
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
export const LoginDocument = gql`
  query Login($options: UserInput!) {
    login(options: $options) {
      id
    }
  }
`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginQuery(
  baseOptions: Apollo.QueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export function useLoginLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
}
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginQueryResult = Apollo.QueryResult<LoginQuery, LoginQueryVariables>;
export const LogoutDocument = gql`
  query Logout {
    logout
  }
`;

/**
 * __useLogoutQuery__
 *
 * To run a query within a React component, call `useLogoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoutQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoutQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoutQuery(
  baseOptions?: Apollo.QueryHookOptions<LogoutQuery, LogoutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export function useLogoutLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<LogoutQuery, LogoutQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<LogoutQuery, LogoutQueryVariables>(LogoutDocument, options);
}
export type LogoutQueryHookResult = ReturnType<typeof useLogoutQuery>;
export type LogoutLazyQueryHookResult = ReturnType<typeof useLogoutLazyQuery>;
export type LogoutQueryResult = Apollo.QueryResult<LogoutQuery, LogoutQueryVariables>;
export const RecentTransactionsDocument = gql`
  query RecentTransactions {
    user {
      transactions {
        id
        name
        time
        amount
        category {
          icon
          color
        }
      }
    }
  }
`;

/**
 * __useRecentTransactionsQuery__
 *
 * To run a query within a React component, call `useRecentTransactionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRecentTransactionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRecentTransactionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useRecentTransactionsQuery(
  baseOptions?: Apollo.QueryHookOptions<RecentTransactionsQuery, RecentTransactionsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(
    RecentTransactionsDocument,
    options,
  );
}
export function useRecentTransactionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RecentTransactionsQuery,
    RecentTransactionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RecentTransactionsQuery, RecentTransactionsQueryVariables>(
    RecentTransactionsDocument,
    options,
  );
}
export type RecentTransactionsQueryHookResult = ReturnType<typeof useRecentTransactionsQuery>;
export type RecentTransactionsLazyQueryHookResult = ReturnType<
  typeof useRecentTransactionsLazyQuery
>;
export type RecentTransactionsQueryResult = Apollo.QueryResult<
  RecentTransactionsQuery,
  RecentTransactionsQueryVariables
>;
export const UserDocument = gql`
  query User {
    user {
      id
      name
      email
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
