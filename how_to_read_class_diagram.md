
<div align="center">
  <h1> UML </h1>
</div>

<div align="center">
  <h2> 1. Understanding the Structure of a Class Diagram </h2>
</div>

- Each class is represented as a box divided into three parts:
    - **Class Name**: The top part of the box shows the class name.
    - **Attributes**: The middle section lists attributes (or properties) of the class, along with their data types.
    - **Methods**: The bottom section lists the class methods, including their parameters and return types.

```typescript
+-------------------------------+
|        Class                  |  ← Class Name
+-------------------------------+
| -attribute1: Type             |  ← Attributes
| -attribute2: Type             |
+-------------------------------+
| +method1(): Return            |  ← Methods
| +method2(param: Type): Return |
+-------------------------------+
```

	•	Modifiers:
	•	+: Public
	•	-: Private
	•	#: Protected

Example:

```typescript
+-----------------------------+
|       User                  |
+-----------------------------+
| -id: int                    |
| -name: String               |
+-----------------------------+
| +getName(): String          |
| +setName(name: String): void|
+-----------------------------+
```

<div align="center">
  <h2> 2. Class Relationships </h2>
</div>
Class diagrams show different relationships between classes:

### 1. **Association**: A solid line, representing a “has-a” relationship
- Definition: An association represents a “has-a” relationship between two classes.
- Symbol: Solid line.
- Explanation: This is the most general type of relationship, indicating that one class uses or references another. Association does not imply ownership; it simply means that objects of one class are connected to objects of another class.
- Example: A Teacher class associated with a Student class could represent that a teacher “has” students.

Diagram Example:

```typescript
+----------+            +----------+
| Teacher  | 1       *  | Student  |
+----------+ ---------- +----------+

In this example, each Teacher is associated with multiple Students, as indicated by the 1 and * notation on each end of the line.

```

### 2. **Aggregation**: A line with a hollow diamond. A weaker “contains-a” relationship (e.g., Team and Players).
- Definition: A form of association where one class “contains” another class, but the contained class can exist independently.
- Symbol: Line with a hollow diamond at the end pointing to the “whole” (container) class.
- Explanation: Aggregation represents a “weak ownership” or “contains-a” relationship. This implies that the lifecycle of the contained class (the “part”) is independent of the container class (the “whole”). If the whole is destroyed, the part may still exist.
- Example: A Team class and a Player class represent aggregation. The Team contains Player instances, but players can still exist independently of any team.

#### Diagram Example:

```typescript
+--------+              +--------+
| Team   | <>---------> | Player |
+--------+              +--------+

Here, a Team contains Players, but if the Team object is destroyed, Players can still exist independently.
```

### 3. **Composition**: A line with a filled diamond, a strong “contains-a” relationship (e.g., House and Rooms).

- Definition: A strong form of association where one class “owns” another class, and the owned class cannot exist independently.
- Symbol: Line with a filled diamond at the end pointing to the “whole” (container) class.
- Explanation: Composition is a “strong ownership” relationship. The lifecycle of the contained object (part) is tightly bound to the lifecycle of the containing object (whole). If the whole is destroyed, all parts are also destroyed.
- Example: A House class and a Room class represent composition. Rooms are parts of a house, and they don’t exist independently of the house.

#### Diagram Example:
```typescript
+--------+              +--------+
| House  | <>---------->| Room   |
+--------+              +--------+

In this case, if the House is destroyed, the Room instances are also destroyed.
```

### 4. **Inheritance** (Generalization): A solid line with an empty triangle pointing to the parent class (e.g., subclass relationship).
- Definition: Represents an “is-a” relationship where one class inherits from another.
- Symbol: Solid line with an empty triangle pointing to the superclass (parent class).
- Explanation: Inheritance indicates that a subclass (child) inherits fields and methods from a superclass (parent). This relationship is also called “generalization” because it describes a hierarchy.
- Example: A Vehicle class is inherited by Car and Truck classes, where both Car and Truck are specific types of vehicles.

#### Diagram Example:
```typescript
             +-----------+
             | Vehicle   |
             +-----------+
                 / \
                /   \
+-----------+         +-----------+
| Car       |         | Truck     |
+-----------+         +-----------+

Here, Car and Truck inherit from the Vehicle class.
```

### 5. **Dependency**: A dashed line with an arrow, indicating that one class temporarily depends on another.
- Definition: A temporary relationship where one class uses another class.
- Symbol: Dashed line with an arrow pointing from the dependent class to the class it depends on.
- Explanation: Dependency indicates that a class relies on another class for some part of its function. The dependent class does not retain any reference to the other class; it only uses it temporarily, usually within a method.
- Example: A Report class might depend on a Printer class to print the report. The Report class is not “connected” to the Printer, but it uses it temporarily when needed.

#### Diagram Example:
```typescript
+---------+              +---------+
| Report  | -----------> | Printer |
+---------+              +---------+

This relationship implies that Report depends on Printer to perform a specific task, like printing.
```
<div align="center">
  <h2>3. Multiplicity Notations</h2>
</div>

Multiplicity symbols near relationships describe the number of instances allowed:
1. 1: Exactly one
2. 0: 0..1: Zero or one
3. *: Zero or more
4. 1..*: One or more

#### Multiplicity Symbols and Examples

1.	1: Exactly One
    - This means that for each instance of the class at one end of the relationship, there must be exactly one instance of the class at the other end.
    - Example:
        - Class Diagram: A Person class and a Passport class, where each person must have exactly one passport.
        - Notation: ``Person "1" ---- "1" Passport``

2.	0..1: Zero or One
	- This indicates that for each instance of the class at one end, there can be either zero or one instance of the class at the other end.
	- Example:
	    - Class Diagram: A User class and a Profile class, where a user may have a profile, but it’s not mandatory.
	-   Notation: ``User "0..1" ---- "1" Profile``

3.	*: Zero or More
    - This signifies that for each instance of the class at one end, there can be zero, one, or multiple instances of the class at the other end.
	-   Example:
	    - Class Diagram: A Library class and a Book class, where a library can have any number of books (including none).
	    - Notation: ``Library "*" ---- "0..*" Book``

4.	1..*: One or More
	- This denotes that for each instance of the class at one end, there must be at least one instance of the class at the other end, but there can be more.
	- Example:
	    - Class Diagram: A Company class and an Employee class, where each company must have at least one employee.
	    - Notation: ``Company "1" ---- "*" Employee``

<div align="center">
  <h2> 4. Abstract Classes and Interfaces</h2>
</div>

### 1. **Abstract Classes**
- **Notation**: Abstract classes are represented as regular classes, but their class name is italicized. Alternatively, some UML tools might add `{abstract}` next to the class name if italics aren’t possible.
- **Attributes and Methods**:
- Abstract methods (methods that are meant to be overridden in subclasses) are also italicized.
- Regular methods and attributes are shown as usual.
- **Purpose**: Abstract classes serve as a base class for other classes and usually contain some implemented functionality alongside abstract methods.

   #### Example:
   ```plaintext
   +---------------------+
   | *Vehicle*           |
   +---------------------+
   | - color: ColorCodes |
   | - price: double     |
   +---------------------+
   | + getPrice(): double|
   | + drive(): void     |
   +---------------------+
   ```

### 2. **Interfaces**
   - **Notation**: Interfaces are represented with the keyword `<<interface>>` above the interface name, or by using the stereotype `{interface}`. The name of an interface can be italicized for emphasis, but it’s not strictly necessary.
   - **Methods**:
     - Interfaces contain method signatures only (no implementation), so only method names and parameters are listed without a body.
   - **Purpose**: Interfaces define a contract that implementing classes must fulfill by providing their own implementation of the methods.

   #### Example:
   ```plaintext
   +-------------------+
   | <<interface>>     |
   | Drivable          |
   +-------------------+
   | + drive(): void   |
   +-------------------+
   ```

### 3. **Relationship Between Abstract Classes, Interfaces, and Subclasses**
   - **Abstract Class to Concrete Class**: Use a solid line with a hollow arrowhead pointing to the abstract class.
   - **Interface to Implementing Class**: Use a dashed line with a hollow arrowhead pointing to the interface.

   #### Example UML Diagram:
   ```plaintext
           +-------------------+                 +---------------------+
           | <<interface>>     |                 | *Vehicle*           |
           | Drivable          |                 +---------------------+
           +-------------------+                 | - color: ColorCodes |
           | + drive(): void   |                 | - price: double     |
           +-------------------+                 +---------------------+
                     ^                          | + getPrice(): double|
                     |                          | + drive(): void     |
                     |                          +---------------------+
                     |
                     |
        +----------------------+
        |      Car             |
        +---------------------- +
        | - model: String      |
        | + drive(): void      |
        +---------------------- +
   ```





<div align="center">
  <h2>  5. Example Scenario: **Online Marketplace</h2>
</div>

In this scenario, we'll model the following entities:
- **User** (an abstract class, representing common attributes and methods for users).
- **Customer** and **Seller** (concrete classes that inherit from **User**).
- **Product** (a concrete class representing items for sale).
- **Review** (a concrete class for customer reviews on products).
- **Sellable** (an interface that defines behavior for items that can be sold).

### Relationships and Multiplicities:
- **User** (abstract class) is the parent of **Customer** and **Seller** classes.
- A **Seller** can have one or more **Products** (multiplicity: `1..*`).
- Each **Product** is associated with exactly one **Seller** (multiplicity: `1`).
- A **Customer** can buy zero or more **Products** (multiplicity: `*`).
- A **Product** can have zero or more **Reviews** (multiplicity: `*`), written by different **Customers**.
- Each **Review** is associated with exactly one **Customer** (multiplicity: `1`).

### UML Diagram

Here's a conceptual layout of the UML diagram to represent this example:

```plaintext
                               +---------------------+
                               | *User*             |
                               +---------------------+
                               | - id: int          |
                               | - name: String     |
                               +---------------------+
                               | + getDetails(): String |
                               +---------------------+
                                          ^
                                          |
                        +-----------------+------------------+
                        |                                    |
            +---------------------+             +----------------------+
            |    Customer         |             |      Seller         |
            +---------------------+             +----------------------+
            | - email: String     |             | - rating: float      |
            +---------------------+             +----------------------+
            | + purchase(): void  |             | + addProduct(): void |
            +---------------------+             +----------------------+
                            |                                    |
                            |                                    |
                            |                        1           |
                 *          |-------------------------------| 1..*
          +-----------------+------------------+    |
          |                                    |    |
+----------------------+           +---------------------+
|      Product        |           |       Review       |
+---------------------+           +---------------------+
| - id: int           |           | - comment: String  |
| - price: double     |           | - rating: int      |
+---------------------+           +---------------------+
| + getPrice(): double|           | + writeReview():   |
+---------------------+           +---------------------+
            ^                                         ^
            | Implements                               |
+---------------------------+
| <<interface>> Sellable    |
+---------------------------+
| + sell(): void            |
+---------------------------+
```

### Explanation of Relationships and Multiplicities

1. **Inheritance and Implementation**:
   - **User** is an abstract class. **Customer** and **Seller** inherit from **User**. This represents a generalization relationship with the line from **Customer** and **Seller** pointing to **User**.
   - **Product** implements the **Sellable** interface, indicated by a dashed line with a hollow arrowhead pointing from **Product** to **Sellable**.

2. **Association Multiplicities**:
   - **Seller** to **Product** (`1..*`): Each **Seller** must have at least one **Product** (one or more). This is shown with a line from **Seller** to **Product** with `1..*` at the **Product** end and `1` at the **Seller** end.
   - **Customer** to **Product** (`*`): A **Customer** can purchase zero or more **Products**. This is represented with a `*` at the **Product** end of the line from **Customer** to **Product**.
   - **Product** to **Review** (`*`): A **Product** can have zero or more **Reviews**. This is represented with `*` at the **Review** end of the line from **Product** to **Review**.
   - **Review** to **Customer** (`1`): Each **Review** is written by exactly one **Customer**. This is shown with `1` at the **Customer** end of the line from **Review** to **Customer**.

This setup provides a complete view of inheritance, interfaces, and associations with various multiplicities commonly used in UML. Let me know if you'd like a more detailed visual or further explanation!