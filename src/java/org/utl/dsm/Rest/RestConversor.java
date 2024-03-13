/*
 */
package org.utl.dsm.Rest;

import jakarta.ws.rs.DefaultValue;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.QueryParam;
import jakarta.ws.rs.core.Application;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import org.utl.dsm.Controller.ControllerConversor;

@Path("RestConversor")
public class RestConversor extends Application {

    @Path("conversor")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public Response conversor(@QueryParam("divisa1") @DefaultValue("0.0") double divisa1,
            @QueryParam("divisa2") @DefaultValue("0.0") double divisa2,
            @QueryParam("importe") @DefaultValue("0.0") String importe) {
        ControllerConversor cd = new ControllerConversor();
        double importeFormateado = cd.verificarEntrada(importe);
        double result = cd.convertirMoneda(divisa1, divisa2, importeFormateado);
        String mensaje = """
                      {"result":"%s"} 
                      """;
        mensaje = String.format(mensaje, result);
        return Response.status(Response.Status.OK).entity(mensaje).build();
    }
}
