package users

import (
	"encoding/json"
	"fmt"
	"io"
	"time"
)

//User is user
type User struct {
	ID        int       `json:"id"`
	Name      string    `json:"name"`
	Age       int       `json:"age"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
}

// ParseJSON ..
func (u *User) ParseJSON(data io.Reader) error {
	err := json.NewDecoder(data).Decode(u)

	if err != nil {
		return err
	}

	u.ID = 1
	u.CreatedAt = time.Now()

	return nil
}

// String ..
func (u *User) String() string {
	return fmt.Sprintf("user :: name : %s, age : %d", u.Name, u.Age)
}
