import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  login: User;
  budget: Budget;
  transaction: Transaction;
  category: Category;
  debt: Debt;
  account: Account;
  cycleTransaction: CycleTransaction;
  merchant: Merchant;
  notification: Notification;
  purchase: Purchase;
};


export type QueryLoginArgs = {
  options: UserInput;
};


export type QueryBudgetArgs = {
  options: BudgetInput;
};


export type QueryTransactionArgs = {
  options: TransactionInput;
};


export type QueryCategoryArgs = {
  options: CategoryInput;
};


export type QueryDebtArgs = {
  options: DebtInput;
};


export type QueryAccountArgs = {
  options: AccountInput;
};


export type QueryCycleTransactionArgs = {
  options: CycleTransactionInput;
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

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  birthDate: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  updatePhotoUrl?: Maybe<Scalars['String']>;
  categories: Array<Category>;
  merchants: Array<Merchant>;
  transactions: Array<Transaction>;
  cycleTransactions: Array<CycleTransaction>;
  accounts: Array<Account>;
  budgetMembership: Array<BudgetMembership>;
  debts: Array<Debt>;
  notifications: Array<Notification>;
  purchases: Array<Purchase>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  type: Scalars['Float'];
  iconUrl: Scalars['String'];
  color: Scalars['String'];
  ownerUser?: Maybe<User>;
  ownerBudget?: Maybe<Budget>;
  transactions: Array<Transaction>;
  cycleTransactions: Array<CycleTransaction>;
};

export type Budget = {
  __typename?: 'Budget';
  id: Scalars['String'];
  name: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  categories: Array<Category>;
  merchants: Array<Merchant>;
  transactions: Array<Transaction>;
  cycleTransactions: Array<CycleTransaction>;
  membership: Array<BudgetMembership>;
};

export type Merchant = {
  __typename?: 'Merchant';
  id: Scalars['String'];
  name: Scalars['String'];
  ownerUser?: Maybe<User>;
  ownerBudget?: Maybe<Budget>;
  transactions: Array<Transaction>;
  cycleTransactions: Array<CycleTransaction>;
};

export type Transaction = {
  __typename?: 'Transaction';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  amount: Scalars['Float'];
  time: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  category: Category;
  account: Account;
  budget?: Maybe<Budget>;
  merchant?: Maybe<Merchant>;
  creator?: Maybe<User>;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  name: Scalars['String'];
  currency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  balance: Scalars['Float'];
  iconUrl: Scalars['String'];
  color: Scalars['String'];
  type: Scalars['Float'];
  interestRate?: Maybe<Scalars['Float']>;
  billingDate?: Maybe<Scalars['String']>;
  billingPeriod?: Maybe<Scalars['Float']>;
  owner: User;
  transactions: Array<Transaction>;
  cycleTransaction: Array<CycleTransaction>;
};

export type CycleTransaction = {
  __typename?: 'CycleTransaction';
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  date: Scalars['String'];
  period: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  category: Category;
  account: Account;
  budget?: Maybe<Budget>;
  merchant?: Maybe<Merchant>;
  creator?: Maybe<User>;
};

export type BudgetMembership = {
  __typename?: 'BudgetMembership';
  user: User;
  budget: Budget;
  accessLevel: Scalars['String'];
};

export type Debt = {
  __typename?: 'Debt';
  id: Scalars['String'];
  name: Scalars['String'];
  currency: Scalars['String'];
  interestRate?: Maybe<Scalars['Float']>;
  endDate: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  balance: Scalars['Float'];
  iconUrl: Scalars['String'];
  color: Scalars['String'];
  owner: User;
};

export type Notification = {
  __typename?: 'Notification';
  id: Scalars['String'];
  text: Scalars['String'];
  action?: Maybe<Scalars['String']>;
  read: Scalars['String'];
  time: Scalars['String'];
  user: User;
};

export type Purchase = {
  __typename?: 'Purchase';
  id: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  price: Scalars['Float'];
  currency: Scalars['String'];
  name: Scalars['String'];
  user: User;
  plan: Plan;
};

export type Plan = {
  __typename?: 'Plan';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  purchases: Purchase;
};

export type UserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type BudgetInput = {
  id: Scalars['String'];
};

export type TransactionInput = {
  id: Scalars['String'];
};

export type CategoryInput = {
  id: Scalars['String'];
};

export type DebtInput = {
  id: Scalars['String'];
};

export type AccountInput = {
  id: Scalars['String'];
};

export type CycleTransactionInput = {
  id: Scalars['String'];
};

export type MerchantInput = {
  id: Scalars['String'];
};

export type NotificationInput = {
  id: Scalars['String'];
};

export type PurchaseInput = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  register: User;
  updateUser: User;
  deleteUser: User;
  revokeToken: Scalars['Boolean'];
  createBudget: Budget;
  updateBudget: Budget;
  deleteBudget: Budget;
  addBudgetMember: Scalars['Boolean'];
  removeBudgetMember: Scalars['Boolean'];
  createTransaction: Transaction;
  updateTransaction: Transaction;
  deleteTransaction: Transaction;
  createCategory: Category;
  updateCategory: Category;
  deleteCategory: Category;
  createDebt: Debt;
  updateDebt: Debt;
  deleteDebt: Debt;
  createAccount: Account;
  updateAccount: Account;
  deleteAccount: Account;
  createCycleTransaction: CycleTransaction;
  updateCycleTransaction: CycleTransaction;
  deleteCycleTransaction: CycleTransaction;
  createMerchant: Merchant;
  updateMerchant: Merchant;
  deleteMerchant: Merchant;
  createNotification: Notification;
  updateNotification: Notification;
  deleteNotification: Notification;
  createPurchase: Purchase;
  updatePurchase: Purchase;
  deletePurchase: Purchase;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationUpdateUserArgs = {
  options: UpdateUserInput;
};


export type MutationCreateBudgetArgs = {
  options: NewBudgetInput;
};


export type MutationUpdateBudgetArgs = {
  options: UpdateBudgetInput;
};


export type MutationDeleteBudgetArgs = {
  options: BudgetInput;
};


export type MutationAddBudgetMemberArgs = {
  options: AddBudgetMemberInput;
};


export type MutationRemoveBudgetMemberArgs = {
  options: RemoveBudgetMemberInput;
};


export type MutationCreateTransactionArgs = {
  options: NewTransactionInput;
};


export type MutationUpdateTransactionArgs = {
  options: UpdateTransactionInput;
};


export type MutationDeleteTransactionArgs = {
  options: TransactionInput;
};


export type MutationCreateCategoryArgs = {
  options: NewCategoryInput;
};


export type MutationUpdateCategoryArgs = {
  options: UpdateCategoryInput;
};


export type MutationDeleteCategoryArgs = {
  options: CategoryInput;
};


export type MutationCreateDebtArgs = {
  options: NewDebtInput;
};


export type MutationUpdateDebtArgs = {
  options: UpdateDebtInput;
};


export type MutationDeleteDebtArgs = {
  options: DebtInput;
};


export type MutationCreateAccountArgs = {
  options: NewAccountInput;
};


export type MutationUpdateAccountArgs = {
  options: UpdateAccountInput;
};


export type MutationDeleteAccountArgs = {
  options: AccountInput;
};


export type MutationCreateCycleTransactionArgs = {
  options: NewCycleTransactionInput;
};


export type MutationUpdateCycleTransactionArgs = {
  options: UpdateCycleTransactionInput;
};


export type MutationDeleteCycleTransactionArgs = {
  options: CycleTransactionInput;
};


export type MutationCreateMerchantArgs = {
  options: NewMerchantInput;
};


export type MutationUpdateMerchantArgs = {
  options: UpdateMerchantInput;
};


export type MutationDeleteMerchantArgs = {
  options: MerchantInput;
};


export type MutationCreateNotificationArgs = {
  options: NewNotificationInput;
};


export type MutationUpdateNotificationArgs = {
  options: UpdateNotificationInput;
};


export type MutationDeleteNotificationArgs = {
  options: NotificationInput;
};


export type MutationCreatePurchaseArgs = {
  options: NewPurchaseInput;
};


export type MutationUpdatePurchaseArgs = {
  options: UpdatePurchaseInput;
};


export type MutationDeletePurchaseArgs = {
  options: PurchaseInput;
};

export type UsernamePasswordInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  birthDate: Scalars['String'];
};

export type UpdateUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  /** filename with extension to upload */
  photo?: Maybe<Scalars['String']>;
};

export type NewBudgetInput = {
  name: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
};

export type UpdateBudgetInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
};

export type AddBudgetMemberInput = {
  budgetId: Scalars['String'];
  email: Scalars['String'];
  accessLevel?: Maybe<Scalars['String']>;
};

export type RemoveBudgetMemberInput = {
  budgetId: Scalars['String'];
  userId: Scalars['String'];
};

export type NewTransactionInput = {
  name?: Maybe<Scalars['String']>;
  accountId: Scalars['String'];
  categoryId: Scalars['String'];
  amount: Scalars['Float'];
  time: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateTransactionInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  budgetId?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  time?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type NewCategoryInput = {
  name: Scalars['String'];
  limit?: Maybe<Scalars['Float']>;
  type: Scalars['Float'];
  icon: Scalars['String'];
  color: Scalars['String'];
  ownerBudget?: Maybe<Scalars['String']>;
};

export type UpdateCategoryInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
};

export type NewDebtInput = {
  name: Scalars['String'];
  currency: Scalars['String'];
  endDate: Scalars['String'];
  balance: Scalars['Float'];
  icon: Scalars['String'];
  color: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  interestRate?: Maybe<Scalars['Float']>;
};

export type UpdateDebtInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  interestRate?: Maybe<Scalars['Float']>;
};

export type NewAccountInput = {
  name: Scalars['String'];
  currency: Scalars['String'];
  balance: Scalars['Float'];
  icon: Scalars['String'];
  color: Scalars['String'];
  type: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateAccountInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  balance?: Maybe<Scalars['Float']>;
  icon?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
  interestRate?: Maybe<Scalars['Float']>;
  billingDate?: Maybe<Scalars['String']>;
  billingPeriod?: Maybe<Scalars['Float']>;
  owner?: Maybe<Scalars['String']>;
};

export type NewCycleTransactionInput = {
  name?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  categoryId: Scalars['String'];
  amount: Scalars['Float'];
  date: Scalars['String'];
  period: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
};

export type UpdateCycleTransactionInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  accountId?: Maybe<Scalars['String']>;
  categoryId?: Maybe<Scalars['String']>;
  budgetId?: Maybe<Scalars['String']>;
  merchantId?: Maybe<Scalars['String']>;
  amount?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
  period?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
};

export type NewMerchantInput = {
  name: Scalars['String'];
};

export type UpdateMerchantInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type NewNotificationInput = {
  text: Scalars['String'];
  action?: Maybe<Scalars['String']>;
  read: Scalars['String'];
  time: Scalars['String'];
};

export type UpdateNotificationInput = {
  id: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  read?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['String']>;
};

export type NewPurchaseInput = {
  name: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
  price: Scalars['Float'];
  currency: Scalars['String'];
  planId: Scalars['String'];
};

export type UpdatePurchaseInput = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  currency?: Maybe<Scalars['String']>;
  planId?: Maybe<Scalars['String']>;
};

export type RegisterMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);


export const RegisterDocument = gql`
    mutation Register($options: UsernamePasswordInput!) {
  register(options: $options) {
    id
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};