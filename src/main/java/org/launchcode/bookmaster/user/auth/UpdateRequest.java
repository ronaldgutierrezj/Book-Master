package org.launchcode.bookmaster.user.auth;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateRequest {
    private String firstName;
    private String lastName;
    private String phone;
    private String address;
    private String email;
    private String role;

}
