use crate::AppData;
use actix::{Actor, AsyncContext, StreamHandler};
use actix_web_actors::ws;

pub struct WebSocket {
    pub(crate) app_data: actix_web::web::Data<AppData>,
}

impl Actor for WebSocket {
    type Context = ws::WebsocketContext<Self>;

    fn started(&mut self, ctx: &mut Self::Context) {
        let state = self.app_data.clone();
        ctx.run_interval(std::time::Duration::from_secs(1), move |_act, ctx| {
            let counter = state.counter.lock().unwrap();
            ctx.text(counter.to_string())
        });
    }
}

impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WebSocket {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Ping(msg)) => ctx.pong(&msg),
            Ok(ws::Message::Text(text)) => ctx.text(text),
            Ok(ws::Message::Binary(bin)) => ctx.binary(bin),
            _ => (),
        }
    }
}
